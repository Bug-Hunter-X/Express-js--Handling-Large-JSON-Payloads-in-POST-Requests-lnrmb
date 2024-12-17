const express = require('express');
const app = express();

// Increase the body size limit to accommodate larger JSON payloads
app.use(express.json({ limit: '50mb' })); // Adjust the limit as needed

app.post('/users', (req, res) => {
  const newUser = req.body;
  // ... some database operations to add newUser ...
  res.status(201).json({ message: 'User created', user: newUser });
});

// ... other routes ...

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});