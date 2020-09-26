const express = require ('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send ({
        titulo: "Os melhores bregas de Recife",
        data: "26/09/2020"
    })

});

module.exports = router;