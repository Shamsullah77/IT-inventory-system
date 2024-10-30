// controllers/employeeDeviceController.js
const { Employee_Device } = require('../models');

exports.create = async (req, res) => {
  try {
    const employeeDevice = await Employee_Device.create(req.body);
    res.status(201).json(employeeDevice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const employeeDevices = await Employee_Device.findAll();
    res.status(200).json(employeeDevices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const employeeDevice = await Employee_Device.findByPk(req.params.id);
    employeeDevice ? res.status(200).json(employeeDevice) : res.status(404).json({ message: "Employee-Device entry not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const [updated] = await Employee_Device.update(req.body, { where: { id: req.params.id } });
    updated ? res.status(200).json({ message: "Employee-Device entry updated" }) : res.status(404).json({ message: "Employee-Device entry not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await Employee_Device.destroy({ where: { id: req.params.id } });
    deleted ? res.status(200).json({ message: "Employee-Device entry deleted" }) : res.status(404).json({ message: "Employee-Device entry not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
