//estos son los end points


var express = require('express');
var router = express.Router();
const AlumnoController = require("../controllers/alumno-controller");
// const {Alumno} = require("../models/index");


// router.get("/", AlumnoController.findAll);//esto debemos dejarlo abierto
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   Alumno.findAll().then((data)=>{
//     res.send(data);
//   });
//   //res.send('respond with a resource');
// });
router.get("/:id", AlumnoController.findByPk);
/* GET users by id. */
// router.get('/:id', function(req, res, next) {
//   const id = req.params.id;
//   Alumno.findByPk(id).then((data)=>{
//     res.send(data);
//   });

// });

router.get("/", AlumnoController.getAll);//esto es lo de arriba abierto



router.get("/name/:name", AlumnoController.getByName);

module.exports = router;
