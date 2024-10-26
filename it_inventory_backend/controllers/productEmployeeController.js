const { ProductEmployee } = require('../models');

exports.getAllProductEmployees = async (req, res) => {
  try {
    const productEmployees = await ProductEmployee.findAll();
    res.status(200).json(productEmployees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createProductEmployee = async (req, res) => {
  try {
    const productEmployee = await ProductEmployee.create(req.body);
    res.status(201).json(productEmployee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
