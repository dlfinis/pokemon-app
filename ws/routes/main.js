
// import Pokemon from './models/Pokemon'

const Pokemon = require('../models/Pokemon');
const axios = require('axios');
var express = require('express');
var router = express.Router();

let url ='https://pokeapi.co/api/v2/';

const res =  axios.get(url);


function errorLog(error, res) {
        // Error 😨
        if (error.response) {

            console.log('Data', error.response.data);
            console.log('Status', error.response.status);
            console.log('Headers', error.response.headers);

            if (error.response.status === 404) {
                res.status(404).send("No existe info del pokemon");
            } else {
                res.send(error.response.message);
            }

        } else if (error.request) {
            console.log(error.request);
            res.send('Error en el request');
        } else {

            console.log('Error', error.message);
            res.send('Error en el proceso');
        }
        // console.log(error);
}

router.get('/',(req,res) =>{
    res.send('Bienvenido a PokeDEX')
})

router.post('/alive',(req,res) =>{
    let message = 'UP ' + new Date();
   res.send(message);
//    res.send(req.body);
})

router.get('/pokemon/:name',(req,res) =>{

    let name = req.params.name

    if (name == undefined || name === null) {
        res.send('No se envio el nombre');
        // next();
        return;
    }

    let ur = url + `pokemon/${name}`

    console.log('Pokemon URL:', ur);
        axios.get(ur, {})
        .then(function (response) {
          console.log('Pokemon', response.data.name);
          res.send(new Pokemon(response.data.id, response.data.name));
        }).catch(error => {
            errorLog(error, res);
        });
})


router.post('/pokemon/abilities',(req,res) =>{

    let nombre = req.body.name
    let ur = url + `pokemon/${nombre}`
    console.log('Pokemon URL:', ur, 'nombre', nombre);
    axios.get(ur, {
      })
      .then(function (response) {
        // console.log(response.data);
        res.send(response.data.abilities)
        }).catch(error => {
            errorLog(error, res);
        });
})

router.post('/pokemon/experience',(req,res) =>{

    let nombre = req.body.name
    let ur = url + `pokemon/${nombre}`
    console.log('Pokemon URL:', ur);
    console.log('nombre', nombre);
    axios.get(ur, {
      })
      .then(function (response) {
        // console.log(response.data);
        res.send(response.data.base_experience.toString());
        }).catch(error => {
            errorLog(error, res);
        });
})

router.post('/pokemon/items',(req,res) =>{

    let nombre = req.body.name
    let ur = url + `pokemon/${nombre}`
    axios.get(ur, {
      })
      .then(function (response) {
        // console.log(response.data);
        res.send(response.data.held_items)
        }).catch(error => {
            errorLog(error, res);
        });
})

router.post('/pokemon/id',(req,res) =>{

    let nombre = req.body.name
    let ur = url + `pokemon/${nombre}`
    axios.get(ur, {
      })
      .then(function (response) {
        console.log(response.data.id);
        res.status(200).send(response.data.id.toString())
        }).catch(error => {
            errorLog(error, res);
        });
})

router.post('/pokemon/location',(req,res) =>{

    let nombre = req.body.name
    let ur = url + `pokemon/${nombre}`
    axios.get(ur, {
      })
      .then(function (response) {
        console.log(response.data.id);
        res.status(200).send(response.data.location_area_encounters)
        }).catch(error => {
            errorLog(error, res);
        });
})

module.exports = router;