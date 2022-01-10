const express = require('express');
const cors = require('cors');
const citiesRouter = require('./routes/cities.routes');
const PORT = process.env.PORT | 8080;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', citiesRouter);

app.listen(PORT, () => {
  console.log(`PORT: ${PORT}`);
});
