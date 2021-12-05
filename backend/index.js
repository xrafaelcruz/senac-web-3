const makeCrud = require('express-json-file-crud').makeCrud;
const postsCrud = makeCrud('posts', './storage');

const express = require('express')
const cors = require("cors");
const users = require('./storage/users.json')

const app = express()
const port = 3003

app.use(cors());
app.use(express.json());

app.use('/posts', postsCrud);

app.post('/login', (req, res) => {
  const { username, password } = req.body

  const founded = users.find(user => user.username === username && user.password === password)

  if (!founded) {
    return res.json({ success: false, error: 'Login ou senha inválido' });
  }

  return res.json({ success: true });
})

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})
