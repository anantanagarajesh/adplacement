// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
const mongoURI = 'mongodb+srv://rajeshmalisetty0111:<Rajesh2002>@cluster0.3inhtun.mongodb.net/adplacement?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Define Schema and Model for Click Data
const Schema = mongoose.Schema;
const clickSchema = new Schema({
  imageUrl: { type: String, required: true },
  clickedAt: { type: Date, default: Date.now },
});

const Click = mongoose.model('Click', clickSchema);

// Routes
app.post('/api/clicks', (req, res) => {
  const { imageUrl } = req.body;

  const newClick = new Click({ imageUrl });

  newClick.save()
    .then(() => res.json('Click data added'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
