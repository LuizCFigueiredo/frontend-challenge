import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors({
  origin: ['http://localhost:5173', 'http://192.168.0.9:5173'],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

app.use(bodyParser.json());

app.get('/',(req, res) => {
    res.send("Hello World!");
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
      const response = await fetch('http://localhost:3001/users');
      const users = await response.json();

      console.log('Pegar users:', users);
  
      const user = users.find(user => user.email === email && user.password === password);
  
      if (user) {
        res.status(200).json({ message: 'Login successful' });
      } else {
        res.status(401).json({ message: 'Invalid email or password' });
      }
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
});

app.post('/cadastro', async (req, res) => {
  const { email, password } = req.body;

  try {
    const response = await fetch('http://localhost:3001/users');
    const users = await response.json();

    if (users.find(user => user.email === email)) {
      res.status(400).json({ message: 'Email already exists' });
      return;
    };

    const newId = users.length
      ? (Math.max(...users.map(user => parseInt(user.id, 10))) + 1).toString()
      : '1';

    const newUser = {
      id: newId,
      email,
      password
    };

    const createResponse = await fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    });

    if (createResponse.ok) {
      res.status(201).json({ message: 'User registered successfully', newUser });
    } else {
      res.status(500).json({ message: 'Failed to register user' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(3000, '192.168.0.9', () => {
    console.log('Listening on port 3000');
});