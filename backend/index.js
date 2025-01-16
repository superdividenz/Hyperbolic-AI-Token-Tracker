// backend/index.js
const dotenv = require('dotenv');
dotenv.config(); // Load environment variables from .env

console.log('Supabase URL:', process.env.SUPABASE_URL);
console.log('Supabase Key:', process.env.SUPABASE_KEY);

const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const portfolioRoutes = require('./routes/portfolio');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/portfolio', portfolioRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});