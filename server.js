const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send("Hello World");
});

const usersRoutes = require('./src/routes/users.routes')

app.use('/api/v1/users', usersRoutes)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});