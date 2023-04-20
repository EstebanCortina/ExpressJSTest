const express = require('express')
const app = express()

function f1(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * f1(n - 1);
  }
}


app.get('/', (req, res) => {
  res.send("<h1>Homepage</h1>");
});

app.get('/factorial/:value', (req, res) => {
  let number = req.params;

  res.json({ resultado: f1(number.value) });
})

app.listen(3000)