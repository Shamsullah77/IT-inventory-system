const { Deputy } = require('../models');

exports.getAllDeputies = async (req, res) => {
  try {
    const deputies = await Deputy.findAll();
    res.status(200).json(deputies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createDeputy = async (req, res) => {
  try {
    const deputy = await Deputy.create(req.body);
    res.status(201).json(deputy);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getDeputyById = async (req, res) => {
  try {
    const deputy = await Deputy.findByPk(req.params.id);
    if (deputy) res.status(200).json(deputy);
    else res.status(404).json({ message: 'Deputy not found' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
