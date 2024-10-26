const { Directorate } = require('../models');

exports.getAllDirectorates = async (req, res) => {
  try {
    const directorates = await Directorate.findAll();
    res.status(200).json(directorates);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createDirectorate = async (req, res) => {
  try {
    const directorate = await Directorate.create(req.body);
    res.status(201).json(directorate);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getDirectorateById = async (req, res) => {
  try {
    const directorate = await Directorate.findByPk(req.params.id);
    if (directorate) res.status(200).json(directorate);
    else res.status(404).json({ message: 'Directorate not found' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
