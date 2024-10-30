// controllers/departmentController.js
const { Department } = require('../models');

exports.create = async (req, res) => {
  try {
    const department = await Department.create(req.body);
    res.status(201).json(department);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const departments = await Department.findAll();
    res.status(200).json(departments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const department = await Department.findByPk(req.params.id);
    department ? res.status(200).json(department) : res.status(404).json({ message: "Department not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const [updated] = await Department.update(req.body, { where: { DepartmentID: req.params.id } });
    updated ? res.status(200).json({ message: "Department updated" }) : res.status(404).json({ message: "Department not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await Department.destroy({ where: { DepartmentID: req.params.id } });
    deleted ? res.status(200).json({ message: "Department deleted" }) : res.status(404).json({ message: "Department not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
