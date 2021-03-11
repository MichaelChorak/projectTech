const dotenv = require('dotenv').config(); //env files
const express = require('express');
const lodash = require('lodash');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const app = express();
const port =  process.env.PORT || 5000;
const userSchema = require('./schema/user-schema');
const bodyParser = require('body-parser');
var http = require("http");

// const routes =  require('./routes/router');

// verbinding maken met de database
const {
  MongoClient
} = require('mongodb');
const uri = `mongodb+srv://maikiew:${process.env.DB_PASS}%21@cluster0.fiihw.mongodb.net/test?authSource=admin&replicaSet=atlas-r4sakp-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`;
const db = new MongoClient(uri, {
  useUnifiedTopology: true
});
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.json());
db.connect();
async function run() {
  try {
    // Connect the client to the server
    await db.connect();
    // Establish and verify connection
    await db.db("maikiew").command({
      ping: 1
    });
    console.log("Connected successfully to server");
  } finally {
    // Ensures that the client will close when you finish/error
    await db.close();
  }
}
run().catch(console.dir);

//even een kleine test

//standaard layout is nu main.hbs en extensie naam is veranderd naar .hbs
app.engine('hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs'
}));
app.set('view engine', 'hbs');

app.use(express.static('public'));


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


// We maken connectie met de database, gaan naar db users en in users zoeken we collection customers
// Daarna wordt dit een object bestaande uit een array met alle customers en deze worden gesorteerd op naam
// Voorderest geven we een title mee en het object gebruikers aan /gebruikersdb
app.get('/gebruikersdb', async (req, res) => {
  MongoClient.connect(uri, async function(err, db) {
    let dbo = db.db("users");
    gebruikers = await dbo.collection('customers').find({}, {
      sort: {
        naam: 1
      }
    }).toArray();
    res.render('gebruikers', {
      title: "Alle deelnemers op een rij",
      gebruikers
    });
  });
});


//homepagina render
app.get('/', (req, res) => {

  res.render('home')
});


//zoek naar tegenstanders
app.get('/zoeken', async (req, res) => {
  MongoClient.connect(uri, async function(err, db) {
    let dbo = db.db("users");
    let provincies = await dbo.collection('provincies').find({}, {
      sort: {
        naam: 1
      }
    }).toArray();
    res.render('filter', {
      provincies
    });
  });
});


// hier posten we de zoek formulier naar matches en geven de waardes mee als een array met objecten
app.post('/zoeken', async (req, res) => {
  MongoClient.connect(uri, async function(err, db) {
    let dbo = db.db('users');
    let customers = await dbo.collection('customers');
    let provincies = await dbo.collection('provincies').find({}, {
      sort: {
        naam: 1
      }
    }).toArray();
    let renderData = await dbo.collection('customers').find({
      provincie: req.body.provincie,
      favspel: req.body.favspel
    }).toArray()

    console.log(renderData);
    res.render('matches', {
      renderData,
      provincies
    })
  })
})


app.get('/index', (req, res) => {
  res.render('landingspagina');
})

//register render
app.get('/register', async (req, res) => {
  MongoClient.connect(uri, async function(err, db) {
    let dbo = db.db("users");
    provincies = await dbo.collection('provincies').find({}, {
      sort: {
        naam: 1
      }
    }).toArray();
    res.render('register', {
      provincies
    });
  });
});


//Hier kunnen mensen informatie invullen en wordt geplaatst in de database users en in de collection 'customers' **form**
app.post("/addname", (req, res) => {
  MongoClient.connect(uri, function(err, db) {
    if (err) throw err;
    let dbo = db.db("users");
    dbo.collection("customers").insertOne({
        naam: req.body.naam,
        leeftijd: req.body.leeftijd,
        email: req.body.email,
        provincie: req.body.provincie,
        favspel: req.body.favspel
      },
      function(err, result) {
        if (err) throw err;
        res.redirect('/zoeken'); //Hier wordt je naar toe gestuurd na submit
        db.close();
      });
  });
});
