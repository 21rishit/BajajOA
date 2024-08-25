const express = require('express');
const app = express();
app.use(express.json());

const userInfo = {
  user_id: "john_doe_17091999",
  email: "john@xyz.com",
  roll_number: "ABCD123"
};

app.post('/bfhl', (req, res) => {
  const { data } = req.body;

  let numbers = [];
  let alphabets = [];
  let highestLowercase = [];
  data.forEach(item => {
    if (!isNaN(item)) {
      numbers.push(item);
    } else if (/^[A-Za-z]$/.test(item)) {
      alphabets.push(item);
      if (item === item.toLowerCase()) {
        highestLowercase.push(item);
      }
    }
  });

  const highestLowercaseAlphabet = highestLowercase.length > 0 ? [highestLowercase.sort().reverse()[0]] : [];

  res.status(200).json({
    is_success: true,
    ...userInfo,
    numbers,
    alphabets,
    highest_lowercase_alphabet: highestLowercaseAlphabet
  });
});
app.get('/bfhl', (req, res) => {
  res.status(200).json({
    operation_code: 1
  });
});

module.exports = app;

