
const express = require('express');
const router = express.Router();
const Consumption = require('../models/Consumption');

// Criar Registro de Consumo
router.post('/', async (req, res) => {
  const consumption = new Consumption(req.body);
  try {
    await consumption.save();
    res.status(201).send(consumption);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Ler Registros de Consumo
router.get('/:userId', async (req, res) => {
  try {
    const consumptions = await Consumption.find({ user: req.params.userId });
    res.send(consumptions);
  } catch (error) {
    res.status(404).send(error);
  }
});

// Atualizar Registro de Consumo
router.put('/:id', async (req, res) => {
  try {
    const consumption = await Consumption.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(consumption);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Deletar Registro de Consumo
router.delete('/:id', async (req, res) => {
  try {
    await Consumption.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;
