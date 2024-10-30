// controllers/productController.js
const { Product } = require('../models');

exports.create = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    product ? res.status(200).json(product) : res.status(404).json({ message: "Product not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const [updated] = await Product.update(req.body, { where: { ProductID: req.params.id } });
    updated ? res.status(200).json({ message: "Product updated" }) : res.status(404).json({ message: "Product not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await Product.destroy({ where: { ProductID: req.params.id } });
    deleted ? res.status(200).json({ message: "Product deleted" }) : res.status(404).json({ message: "Product not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
