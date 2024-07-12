const express = require('express');
const { Client } = require('pg');
const app = express();
const port = 8080;

app.use(express.json());

// Database connection
const client = new Client({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

client.connect();

// Routes
app.use('/api', require('./routes/api'));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
