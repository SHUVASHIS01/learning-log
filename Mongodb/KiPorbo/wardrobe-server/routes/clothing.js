const express = require('express');
const router = express.Router();
const Clothing = require('../models/Clothing');

const requireUserId = (req, res, next) => {
  const userId = req.headers['x-user-id'];
  console.log('Incoming request x-user-id:', userId);
  if (!userId) {
    return res.status(401).json({ error: 'Unauthorized: Missing userId' });
  }
  req.userId = userId;
  next();
};

router.use(requireUserId);

router.get('/', async (req, res) => {
  try {
    const clothes = await Clothing.find({ userId: req.userId }).sort({ createdAt: -1 });
    res.json(clothes);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch clothes' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const clothing = await Clothing.findOne({ _id: req.params.id, userId: req.userId });
    if (!clothing) {
      return res.status(404).json({ error: 'Clothing item not found' });
    }
    res.json(clothing);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch clothing item' });
  }
});

router.post('/', async (req, res) => {
  try {
    const newClothing = new Clothing({
      ...req.body,
      userId: req.userId
    });
    const savedClothing = await newClothing.save();
    res.status(201).json(savedClothing);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create clothing item', details: err.message });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const updatedClothing = await Clothing.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedClothing) {
      return res.status(404).json({ error: 'Clothing item not found' });
    }
    res.json(updatedClothing);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update clothing item', details: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedClothing = await Clothing.findOneAndDelete({ _id: req.params.id, userId: req.userId });
    if (!deletedClothing) {
      return res.status(404).json({ error: 'Clothing item not found' });
    }
    res.json({ message: 'Clothing item deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete clothing item' });
  }
});

router.patch('/:id/worn', async (req, res) => {
  try {
    const clothing = await Clothing.findOne({ _id: req.params.id, userId: req.userId });
    if (!clothing) {
      return res.status(404).json({ error: 'Clothing item not found' });
    }
    
    clothing.lastWorn = new Date();
    clothing.timesWorn += 1;
    
    await clothing.save();
    res.json(clothing);
  } catch (err) {
    res.status(500).json({ error: 'Failed to mark as worn' });
  }
});

module.exports = router;
