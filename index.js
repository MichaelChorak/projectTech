

const dotenv = require('dotenv').config();
const config = require('./process.env');
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://maikiew:Chorak12l3c1%21@cluster0.fiihw.mongodb.net/test?authSource=admin&replicaSet=atlas-r4sakp-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";
const db = new MongoClient(uri, {useUnifiedTopology: true});
db.connect();
async function run() {
  try {
    // Connect the client to the server
    await db.connect();
    // Establish and verify connection
    await db.db("admin").command({ ping: 1 });
    console.log("Connected successfully to server");
  } finally {
    // Ensures that the client will close when you finish/error
    await db.close();
  }
}
run().catch(console.dir);




app.use(bodyParser.urlencoded({ extended: true}));


//standaard layout is nu main.hbs en extensie naam is veranderd naar .hbs
app.engine('hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs'
}));
app.set('view engine', 'hbs');

app.use(express.static('public'));

app.get('/movies', (req, res) => {
  res.render('listOfMovies', {title:"Een lijst met filmpjes", movies})
});

//homepagina render
app.get('/', (req, res) => {
  res.render('home');
});

//moviepagina render
// app.get('/movies', (req, res) => {
//   res.send('A list of movies')
// });


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
