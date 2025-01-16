// backend/routes/portfolio.js
const express = require('express');
const router = express.Router();
const supabase = require('../supabase');

// Fetch portfolio data
router.get('/:userId', async (req, res) => {
  const { userId } = req.params;
  const { data, error } = await supabase
    .from('portfolios')
    .select('*')
    .eq('user_id', userId);

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

module.exports = router;