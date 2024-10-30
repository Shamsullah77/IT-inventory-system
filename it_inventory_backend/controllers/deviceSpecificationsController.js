// controllers/deviceSpecificationsController.js
const { DeviceSpecifications } = require('../models');

exports.create = async (req, res) => {
  try {
    const deviceSpec = await DeviceSpecifications.create(req.body);
    res.status(201).json(deviceSpec);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const deviceSpecs = await DeviceSpecifications.findAll();
    res.status(200).json(deviceSpecs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const deviceSpec = await DeviceSpecifications.findByPk(req.params.id);
    deviceSpec ? res.status(200).json(deviceSpec) : res.status(404).json({ message: "Device specification not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const [updated] = await DeviceSpecifications.update(req.body, { where: { SpecID: req.params.id } });
    updated ? res.status(200).json({ message: "Device specification updated" }) : res.status(404).json({ message: "Device specification not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await DeviceSpecifications.destroy({ where: { SpecID: req.params.id } });
    deleted ? res.status(200).json({ message: "Device specification deleted" }) : res.status(404).json({ message: "Device specification not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
