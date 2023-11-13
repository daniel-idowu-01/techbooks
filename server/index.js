const cors = require('cors')
const express = require('express')

const app = express()
const port = process.env.PORT || 5000

// middleware
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!');
})

// database connection
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://danielidowu:danielidowu@cluster0.lxulz2t.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // create a collection of books
    const bookCollections = client.db('BookInventory').collection('books')

    // insert a book to the database
    app.post('/upload-book', async (req, res) => {
      const data = req.body;
      const result = await bookCollections.insertOne(data);
      res.send(result);
    })

    // get all books from the database
    app.get('/all-books', async (req, res) => {
      const books = bookCollections.find();
      const result = await books.toArray();
      res.send(result);
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})