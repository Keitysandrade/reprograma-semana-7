const bregas = require ("../model/bregas.json");

const getAll = (req, res) => {

    console.log (req.url);
    res.send(bregas);
};
module.exports ={getAll}; 