const { Alumno, Nacionalidades } = require("../models.js"); //models.js

const AlumnoController = {};

AlumnoController.getAll = async (req, res) => {
  try {
    const data = await Alumno.findAll({
      include: [{ model: Nacionalidades, as: "id_nacionalidad_Nacionalidade" }],
    });
    res.json(data);
  } catch (error) {
    res.status(500).send({
      message: "Some error occurred while retrieving users.",
    });
  }
};

////metodo get by name
AlumnoController.getByName = async (req, res) => {
  const name = req.params.name;
  try {
    const data = await Alumno.findAll({
      where: { Nombre: { [Op.like]: `%${name}%` } },
      include: [{ model: Nacionalidades, as: "id_nacionalidad_Nacionalidade" }],
    });
    if (data.length > 0) {
      res.json(data);
    } else {
      res.status(404).send({
        message: `Cannot find user with name=${name}`,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: `Error retreiving user retrieving with name=${name}.`,
    });
  }
};

// AlumnoController.findAll = (req, res) => {
//     Alumno.findAll().then((data)=>{
//         res.send(data);

// });
// };

AlumnoController.findByPk = (req, res) => {
  const id = req.params.id;
  Alumno.findByPk(id).then((data) => {
    res.send(data);
  });
};

module.exports = AlumnoController;
