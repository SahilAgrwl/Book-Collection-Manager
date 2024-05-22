const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const booksRouter = require('./routes/books');

const app = express();
const PORT = 5000;

app.use(cors(
  {
    origin: ["https://book-collection-manager-client.vercel.app"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true
  }
));
app.use(express.json());

mongoose.connect('mongodb+srv://sahilagrawal4556:o5o2FlprgVcPRkhL@cluster0.xygocbf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

app.use('/api/books', booksRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
