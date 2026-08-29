const express = require('express'); //import kora
const app = express() //express diye app banabo
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const user =[
  {
    "id": 1,
    "name": "Leanne Graham",
    "email": "sincere@april.biz",
    "role": "Developer"
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "email": "shanna@melissa.tv",
    "role": "Designer"
  },
  {
    "id": 3,
    "name": "Clementina DuBuque",
    "email": "rey.padberg@karina.biz",
    "role": "Manager"
  }
]


app.get('/users', (req, res) => {
    res.send(user)
})

app.get('/products', (req, res) => {
    res.send('products paichis re..')
})

app.listen(port, () => {
  console.log(`Example app running on port ${port}`)
})