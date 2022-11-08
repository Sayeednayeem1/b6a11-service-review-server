const express = require('express');
const cors = require('cors');
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;
require('dotenv').config();

// TODO middleware
app.use(cors());
app.use(express.json());

// todo MONGODB

const uri = "mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.qk4n58g.mongodb.net/?retryWrites=true&w=majority";
// console.log(uri);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});



// todo root
app.get('/', (req, res) =>{
    res.send("This is my Assignment 11 server!");
});

// todo port running on,,,
app.listen( port, () =>{
    console.log('server is running on port: ', port);
})
