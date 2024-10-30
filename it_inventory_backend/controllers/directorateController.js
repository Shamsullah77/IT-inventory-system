// controllers/directorateController.js
const { Directorate } = require('../models');

exports.create = async (req, res) => {
  try {
    const directorate = await Directorate.create(req.body);
    res.status(201).json(directorate);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const directorates = await Directorate.findAll();
    res.status(200).json(directorates);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const directorate = await Directorate.findByPk(req.params.id);
    directorate ? res.status(200).json(directorate) : res.status(404).json({ message: "Directorate not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const [updated] = await Directorate.update(req.body, { where: { DirectorateID: req.params.id } });
    updated ? res.status(200).json({ message: "Directorate updated" }) : res.status(404).json({ message: "Directorate not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await Directorate.destroy({ where: { DirectorateID: req.params.id } });
    deleted ? res.status(200).json({ message: "Directorate deleted" }) : res.status(404).json({ message: "Directorate not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
