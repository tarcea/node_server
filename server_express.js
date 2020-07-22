const express = require('express');
const app = express();
const querystring = require('querystring');

app.use('/css', express.static(__dirname + '/public/css'));
app.use('/', (req, res, next) => {
  console.log('a request was made for' + req.url)
  res.cookie('cookiename', 'cookievalue')

  next()
})

app.get('/', (req, res) => {
    res.send(`
        <html>
          <head>
          <link type="text/css" rel="stylesheet" href="/css/style.css" />
          </head>
          <body>
            <h1>Hello, my express server darling...</h1>
          </body>
        </html>
      `)

});

app.get('/api/user', (req, res) => {
    res.send({
      name: "viorel",
      cars: ['volvo', 'dacia', 'subaru', 'seat']
    })
});

app.get('/api/:user/:id', (req, res) => {
    let userName = req.params.user;
    let id = req.params.id;
    res.send(
        `<html>
          <body>
            <h1>The user id is ${id}, and the name is ${userName}</h1>
          </body>
        </html>`
      )
});

app.get('/api/car', (req, res) => {
    let brand = req.query.brand;
    let year = req.query.year;

    res.send({
      brand,
      year
    })
});



const port = process.env.PORT || 3000;
app.listen(port);
