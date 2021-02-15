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
  res.render('home')
});

//moviepagina render
// app.get('/movies', (req, res) => {
//   res.send('A list of movies')
// });


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
