const express = require ('express');
const router = express.Router ();
const controller = require ('../controller/bregasController')

router.get("/", controller.getAll);
router.get("/bregas", controller.getAll);

module.exports = router;
