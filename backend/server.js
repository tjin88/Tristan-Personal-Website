const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 8000;

// Middleware
const bodyParser = require('body-parser');
app.use(bodyParser.json());     // support parsing of application/json type post data
app.use(bodyParser.urlencoded({ extended: false }));     //true --> support parsing of application/x-www-form-urlencoded post data

// Connect to MongoDB database
mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@${process.env.CLUSTER}/test`,
                 { useNewUrlParser: true });

// Define data model schema using Mongoose
const dataSchema = new mongoose.Schema({
    inputDate: {
        type: String,
    },
    type: {
        type: String,
    },
    name: {
        type: String,
    },
    lastChapterRead: {
        type: Number,
    },
    lastDateRead: {
        type: String,
    },
    ongoingCompleted: {
        type: String,
    },
    sourceA: {
        type: String,
    },
    linkA: {
        type: String,
    },
    sourceB: {
        type: String,
    },
    linkB: {
        type: String,
    },
    field1: String,
    field2: String,
    field3: String,
    field4: String,
    field5: String,
    field6: String,
    field7: String,
    field8: String,
    field9: String,
    field10: String
});

const Data = mongoose.model('Data', dataSchema);

// Define API routes
app.get('/api/data', (req, res) => {
  Data.find()
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

app.post('/api/data', (req, res) => {
    console.log(req.body);
    const newData = new Data(req.body);
    console.log(newData);
    newData.save()
        .then(() => {
        res.status(201).send('Data added successfully');
        //   res.status(201).send(newData);
    })
        .catch(error => {
        res.status(400).send(error);
        });
    });

// Parse incoming request bodies as JSON
app.use(express.json());

// Handle errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong');
});

// Start server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
