const express = require('express')
const exphbs = require('express-handlebars');
const app = express()
const port = 3000;


const movies = [
  {title: "333", genre: "333", jaartal: "3333",
  title: "3433", genre: "334443", jaartal: "3333433",
  title: "3vfff33", genre: "3v b33", jaartal: "3rfv333"
}
]


app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/movies', (req, res) => {
  res.render('listOfMovies', {title: "List of Movies", movies})
});


app.get('/', (req, res) => {
  res.render('home', {})
});


app.get('/movies', (req, res) => {
  res.send('A list of movies')
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
