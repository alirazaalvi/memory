const express = require('express');
const cors = require('cors');
const preparePairs = require('./helpers').preparePairs;
const data = require('./testData');

const app = express();
app.use(cors());

const port = process.env.SERVER_PORT || 3000;

// Example: 'GET /png/billy/300' will return a 300x300 png for the identifier 'billy'
app.get('/cards/:size', (req, res) => {
//   res.send(jdenticon.toPng(req.params.identifier, Number.parseInt(req.params.size, 10)));
  let size = Number.parseInt(req.params.size, 10);
  if (size < 2) {
    size = 6;
  }

  const cards = preparePairs(data.cards, size);

  res.send({ cards });
});

// Example: 'GET /svg/billy/300' will return a 300x300 svg for the identifier 'billy'
app.get('/svg/:identifier/:size', (req, res) => {
  res.setHeader('Content-Type', 'image/svg+xml');
  res.send(jdenticon.toSvg(req.params.identifier, Number.parseInt(req.params.size, 10)));
});

app.listen(port, () => console.log(`Image server running on port ${port}`));
