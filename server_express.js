const express = require('express');
const app = express();
const querystring = require('querystring');

app.get('/', (req, res) => {
    res.send(`
        <html>
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
