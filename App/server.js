const express = require('express')
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.get('/productos/', (req, res) => {
  res.send("<h1>Productos</h1>");
})

app.post('/productos', (req, res) => {
  console.log(req.body);
  res.json({ msg: "Creado" });
})

app.listen(3000)