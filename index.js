

const dotenv = require('dotenv').config(); //env files
const express = require('express');
const lodash = require('lodash');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const uri = `mongodb+srv://maikiew:${process.env.DB_PASS}%21@cluster0.fiihw.mongodb.net/test?authSource=admin&replicaSet=atlas-r4sakp-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`;
const db = new MongoClient(uri, {useUnifiedTopology: true});
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.json());
db.connect();
async function run() {
  try {
    // Connect the client to the server
    await db.connect();
    // Establish and verify connection
    await db.db("maikiew").command({ ping: 1 });
    console.log("Connected successfully to server");
  } finally {
    // Ensures that the client will close when you finish/error
    await db.close();
  }
}
run().catch(console.dir);




//standaard layout is nu main.hbs en extensie naam is veranderd naar .hbs
app.engine('hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs'
}));
app.set('view engine', 'hbs');

app.use(express.static('public'));

// app.get('/movies', (req, res) => {
//   res.render('listOfMovies', {title:"Een lijst met filmpjes", movies})
// });

app.get('/confirm', (req, res) => {
  res.render('home')
});

//homepagina render
app.get('/', (req, res) => {
  res.render('confirm');
});

app.post("/addname", (req, res) => {
  MongoClient.connect(uri, function(err, db) {
          if (err) throw err;
          var dbo = db.db("users");
          dbo.collection("customers").insertOne({
              naam: req.body.naam,
              leeftijd: req.body.leeftijd,
              hallo: req.body.hallo
          },
          function(err, result) {
              if (err) throw err;
            res.redirect('/confirm'); //here the redirect takes place.
              db.close();
          });
      });
});




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
