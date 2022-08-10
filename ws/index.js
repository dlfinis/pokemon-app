const express = require('express') ;
const mainRouter  = require("./routes/main.js")
const app = express();

// CONSTANT
var PORT = process.env.PORT || 8080;

// Router
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(mainRouter);

app.all('*', (req, res) => {
    res.status(404).send('<h1>404! Not found</h1>');
  });

app.use((err, req, res, next) => {
    console.log('Error Process', err.stack);
    res.status(404).send('No se encuentra!');

    res.status(500).send('No se pudo realizar el proceso!');

  })

app.listen(
    PORT,
    (err) => {
        if (err) console.log(err);
        console.log(`UP http://localhost:${PORT}`);
    }
)