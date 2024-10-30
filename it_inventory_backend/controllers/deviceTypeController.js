// controllers/deviceTypeController.js
const { DeviceType } = require('../models');

exports.create = async (req, res) => {
  try {
    const deviceType = await DeviceType.create(req.body);
    res.status(201).json(deviceType);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const deviceTypes = await DeviceType.findAll();
    res.status(200).json(deviceTypes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const deviceType = await DeviceType.findByPk(req.params.id);
    deviceType ? res.status(200).json(deviceType) : res.status(404).json({ message: "Device type not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const [updated] = await DeviceType.update(req.body, { where: { TypeID: req.params.id } });
    updated ? res.status(200).json({ message: "Device type updated" }) : res.status(404).json({ message: "Device type not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await DeviceType.destroy({ where: { TypeID: req.params.id } });
    deleted ? res.status(200).json({ message: "Device type deleted" }) : res.status(404).json({ message: "Device type not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
