// controllers/deputyController.js
const { Deputy } = require('../models'); // Adjust the import based on your model

exports.create = async (req, res) => {
  console.log("Request data:", req.body); // Check data being received
  try {
    const { name } = req.body;
    const newDeputy = await Deputy.create({ Name: name });
    res.status(201).json(newDeputy);
  } catch (error) {
    console.error('Error creating deputy:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.findAll = async (req, res) => {
  try {
    const deputies = await Deputy.findAll();
    res.status(200).json(deputies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const deputy = await Deputy.findByPk(req.params.id);
    deputy ? res.status(200).json(deputy) : res.status(404).json({ message: "Deputy not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const [updated] = await Deputy.update(req.body, { where: { DeputyID: req.params.id } });
    updated ? res.status(200).json({ message: "Deputy updated" }) : res.status(404).json({ message: "Deputy not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await Deputy.destroy({ where: { DeputyID: req.params.id } });
    deleted ? res.status(200).json({ message: "Deputy deleted" }) : res.status(404).json({ message: "Deputy not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
