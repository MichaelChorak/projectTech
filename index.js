

const dbInfo = require('dotenv').config();
var config = require('./process.env');
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const db = require('mongodb');
db.connect({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
});



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
