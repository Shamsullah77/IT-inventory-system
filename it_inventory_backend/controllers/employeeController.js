// controllers/employeeController.js
const { Employee } = require('../models');

exports.create = async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const employees = await Employee.findAll();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const employee = await Employee.findByPk(req.params.id);
    employee ? res.status(200).json(employee) : res.status(404).json({ message: "Employee not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const [updated] = await Employee.update(req.body, { where: { EmployeeID: req.params.id } });
    updated ? res.status(200).json({ message: "Employee updated" }) : res.status(404).json({ message: "Employee not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await Employee.destroy({ where: { EmployeeID: req.params.id } });
    deleted ? res.status(200).json({ message: "Employee deleted" }) : res.status(404).json({ message: "Employee not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
