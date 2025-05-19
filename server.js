const express = require('express');
const mysql   = require('mysql2/promise');
const app     = express();

// parse form‑urlencoded bodies (our Quiz.js is sending URLSearchParams)
app.use(express.urlencoded({ extended: false }));

// configure your MySQL connection
const pool = mysql.createPool({
  host:     'localhost',
  user:     'your_db_user',
  password: 'your_db_pass',
  database: 'your_db_name'
});

app.post('/api/quiz', async (req, res) => {
  const { color, style } = req.body;
  try {
    const [rows] = await pool.execute(
      `SELECT team
         FROM teams
        WHERE jersey_color = ?
          AND play_style  = ?
        LIMIT 1`,
      [color, style]
    );
    if (!rows.length) return res.status(404).send('No matching team');
    res.json({ team: rows[0].team });
  } catch (err) {
    console.error(err);
    res.status(500).send('Database error');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));