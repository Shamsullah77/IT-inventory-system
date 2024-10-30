// controllers/stockController.js
const { Stock } = require('../models');

exports.create = async (req, res) => {
  try {
    const stock = await Stock.create(req.body);
    res.status(201).json(stock);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const stocks = await Stock.findAll();
    res.status(200).json(stocks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const stock = await Stock.findByPk(req.params.id);
    stock ? res.status(200).json(stock) : res.status(404).json({ message: "Stock not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const [updated] = await Stock.update(req.body, { where: { StockID: req.params.id } });
    updated ? res.status(200).json({ message: "Stock updated" }) : res.status(404).json({ message: "Stock not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await Stock.destroy({ where: { StockID: req.params.id } });
    deleted ? res.status(200).json({ message: "Stock deleted" }) : res.status(404).json({ message: "Stock not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
