const express = require('express'); //import kora
const app = express() //express diye app banabo
const cors = require('cors');
const port = process.env.PORT || 8000;


//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send('Hello World!')
})

const users = [
  {
    id: 1,
    name: 'Leanne Graham',
    email: 'sincere@april.biz',
    role: 'Developer'
  },
  {
    id: 2,
    name: 'Ervin Howell',
    email: 'shanna@melissa.tv',
    role: 'Designer'
  },
  {
    id: 3,
    name: 'Clementina DuBuque',
    email: 'rey.padberg@karina.biz',
    role: 'Manager'
  }
];

app.get('/users', (req, res) => {
  res.send(users);
});

app.post('/users', (req, res) => {
  console.log('Post method kaj kortese', req.body);

  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);

  res.status(201).json({ success: true, message: 'kaj kortese post method' });
});

app.get('/products', (req, res) => {
    res.send('products paichis re..')
})

app.listen(port, () => {
  console.log(`Example app running on port ${port}`)
})
