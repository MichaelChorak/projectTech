

// We maken connectie met de database, gaan naar db users en in users zoeken we collection customers
// Daarna wordt dit een object bestaande uit een array met alle customers en deze worden gesorteerd op naam
// Voorderest geven we een title mee en het object gebruikers aan /gebruikersdb
app.get('/gebruikersdb', async (req, res) => {
  MongoClient.connect(uri, async function(err, db) {
    var dbo = db.db("users");
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



app.get('/index', (req, res) => {
  res.render('landingspagina');
})

//register render
app.get('/register', async (req, res) => {
  MongoClient.connect(uri, async function(err, db) {
    var dbo = db.db("users");
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


//proberen zoek functie te maken

userSchema.find({naam: 'Michael'},(error, data) =>{
  if(error){
    console.log(error);
  }else{
    console.log(data);
  }
});




//Hier kunnen mensen informatie invullen en wordt geplaatst in de database users en in de collection 'customers'
app.post("/addname", (req, res) => {
  MongoClient.connect(uri, function(err, db) {
    if (err) throw err;
    var dbo = db.db("users");
    dbo.collection("customers").insertOne({
        naam: req.body.naam,
        leeftijd: req.body.leeftijd,
        email: req.body.email,
        provincie: req.body.provincie,
        favspel: req.body.favspel
      },
      function(err, result) {
        if (err) throw err;
        res.redirect('/gebruikersdb'); //Hier wordt je naar toe gestuurd na submit
        db.close();
      });
  });
});


module.exports = myRouter;
