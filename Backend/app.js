const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const User = require('../models/user');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const matchRoutes = require('./matching');

const JWT_SECRET = 'your_secret_key';

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'TECHMATCH/src')));

// app.use('/findMatches', matchRoutes);

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/codingSaarthi')
  .then(() => {
    console.log("Local-Database connected successfully");
  });
}


app.post('/signUp', async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  console.log('Received data:', req.body);  // Log received data for debugging

  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    await user.save()
    .then(res => console.log(res) )
    .catch(e => console.log(e))

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);  // Log error for debugging
    res.status(500).json({ message: 'Error registering user', error });
  }
});


app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({email})

  // .then(
  //   (res) => {
  //      username = res.username
  //      console.log(username)
  //   }
  // )
  // .catch(e => console.log(e))


  if (!user) {
    return res.status(400).send('Invalid email or password');
  }
  

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).send('Invalid email or password');
  }

  const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
  res.send({ token , username : user.username });
});

// app.post('/userCred', (req, res) => {
//   console.log(req.body);
// });

app.get('/verifyToken', (req, res) => {
  const token = req.headers.authorization.split(' ')[1];

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send('Invalid token');
    }
    res.send({ message: 'Token is valid', userId: decoded.id });
  });
});



app.listen(8080, () => {
  console.log("Server started at port 8080");
});
