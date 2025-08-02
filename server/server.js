const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (HTML, CSS)
app.use(express.static(path.join(__dirname, '../public')));


// Mock data for dashboard
app.get('/api/user', (req, res) => {
  res.json({
    name: 'Vaishnavi',
    referral: 'Vaishnavi2025',
    role: 'Fundraising Intern',
    amountRaised: 23000
  });
});

// Mock data for leaderboard
app.get('/api/leaderboard', (req, res) => {
  res.json([
    {
      name: 'Arjun R',
      avatar: 'https://cdn-icons-png.flaticon.com/512/4140/4140037.png',
      rank: 1,
      amount: 10000
    },
    {
      name: 'Vaishnavi',
      avatar: 'https://cdn-icons-png.flaticon.com/512/219/219969.png',
      rank: 2,
      amount: 7000
    },
    {
      name: 'Karthik M',
      avatar: 'https://cdn-icons-png.flaticon.com/512/2922/2922510.png',
      rank: 3,
      amount: 6000
    }
  ]);
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
