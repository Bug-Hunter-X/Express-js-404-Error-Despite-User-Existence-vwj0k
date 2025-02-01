const express = require('express');
const app = express();
app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    const userData = await database.getUser(userId); // Assuming a database.getUser function
    if (!userData) {
      return res.status(404).send('User not found');
    }
    res.send(userData);
  } catch (error) {
    console.error('Error fetching user:', error);
    return res.status(500).send('Server error');
  }
});