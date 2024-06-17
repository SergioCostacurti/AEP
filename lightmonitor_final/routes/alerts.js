
const express = require('express');
const router = express.Router();
const Alert = require('../models/Alert');

// Criar Alerta
router.post('/', async (req, res) => {
  const alert = new Alert(req.body);
  try {
    await alert.save();
    res.status(201).send(alert);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Ler Alertas
router.get('/:userId', async (req, res) => {
  try {
    const alerts = await Alert.find({ user: req.params.userId });
    res.send(alerts);
  } catch (error) {
    res.status(404).send(error);
  }
});

// Atualizar Alerta
router.put('/:id', async (req, res) => {
  try {
    const alert = await Alert.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(alert);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Deletar Alerta
router.delete('/:id', async (req, res) => {
  try {
    await Alert.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;
