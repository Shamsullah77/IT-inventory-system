// controllers/categoryController.js
const { Category } = require('../models');

exports.create = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);
    category ? res.status(200).json(category) : res.status(404).json({ message: "Category not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const [updated] = await Category.update(req.body, { where: { CategoryID: req.params.id } });
    updated ? res.status(200).json({ message: "Category updated" }) : res.status(404).json({ message: "Category not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await Category.destroy({ where: { CategoryID: req.params.id } });
    deleted ? res.status(200).json({ message: "Category deleted" }) : res.status(404).json({ message: "Category not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
