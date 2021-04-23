const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const PORT = '3005';

app.get('/romanize/:number', (req, res) => {
  const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  const converter = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
  }

  let num = req.params.number
  let numeral = '';
  let i = 0;
  while (num > 0) {
    const decremental = numbers[i];
    if (decremental > num) {
      i++;
    } else {
      num -= decremental;
      numeral += converter[decremental];
    }
  }


  res.status(200);
  res.send(numeral);

})

app.listen(PORT, (err, result) => {
  if (err) {
    console.log('there was an error starting the server!');
  } else {
    console.log(`Server listening on port ${PORT}!`);
  }
});