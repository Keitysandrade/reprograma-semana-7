const express = require ('express');
const app = express ();

const index = require ('./route/index');
const bregas = require ('./route/bregasRoute');

app.use ((req, res, next) => {
   console.log ('Nova requisicao realizada');

   next ()

});

app.use ('/', index);
app.use ('/bregas', bregas);

module.exports = app;