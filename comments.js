// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Import routes
const comments = require('./routes/comments');

// Use routes
app.use('/comments', comments);

// Start server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});