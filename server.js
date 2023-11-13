const express = require('express');
const cors = require('cors');
let mongoose = require('mongoose')
require('dotenv').config()

const app = express();
const PORT = 3001;


mongoose.connect(process.env.MONGODB_CONNECTION);

const cakeSchema = new mongoose.Schema({
    batterFlavor: String,
    fillingFlavor: String,
    icingFlavor: String,
});

const Cake = mongoose.model('Cake', cakeSchema);

app.use(cors());
app.use(express.json());

app.post('/submit-cake-form', async (req, res) => {
  const { batterFlavor, fillingFlavor, icingFlavor } = req.body;

  const newCake = new Cake({
    batterFlavor,
    fillingFlavor,
    icingFlavor,
  })

  try {
    await newCake.save()
    console.log('Cake data saved to database', newCake)

    res.status(200).json( {message: 'New cake recieved and saved'} )
  } catch (error) {
    console.error('Error saving to database', error)
    res.status(500).json( {message: 'Internal server error'} )
  }

});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


app.get('/get-random-cake', async (req, res) => {
    try {
      const randomCake = await Cake.aggregate([{ $sample: { size: 1 } }]);
  
      if (randomCake.length > 0) {
        res.status(200).json(randomCake[0]);
      } else {
        res.status(404).json({ message: 'No cakes found in the database.' });
      }
    } catch (error) {
      console.error('Error fetching random cake:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });