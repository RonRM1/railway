const DataTypes = require("sequelize").DataTypes;
const _Alumno = require("./Alumno");
const _Categoria = require("./Categoria");
const _Cursos = require("./Cursos");
const _Direcciones = require("./Direcciones");
const _Nacionalidades = require("./Nacionalidades");
const _CursoAlumno = require("./curso_alumno");

function initModels(sequelize) {
  const Alumno = _Alumno(sequelize, DataTypes);
  const Categoria = _Categoria(sequelize, DataTypes);
  const Cursos = _Cursos(sequelize, DataTypes);
  const Direcciones = _Direcciones(sequelize, DataTypes);
  const Nacionalidades = _Nacionalidades(sequelize, DataTypes);
  const CursoAlumno = _CursoAlumno(sequelize, DataTypes);

  Direcciones.belongsTo(Alumno, { as: "id_alumno_Alumno", foreignKey: "id_alumno"});
  Alumno.hasMany(Direcciones, { as: "Direcciones", foreignKey: "id_alumno"});
  CursoAlumno.belongsTo(Alumno, { as: "id_alumno_Alumno", foreignKey: "id_alumno"});
  Alumno.hasMany(CursoAlumno, { as: "curso_alumnos", foreignKey: "id_alumno"});
  Cursos.belongsTo(Categoria, { as: "id_categoria_Categorium", foreignKey: "id_categoria"});
  Categoria.hasMany(Cursos, { as: "Cursos", foreignKey: "id_categoria"});
  CursoAlumno.belongsTo(Cursos, { as: "id_curso_Curso", foreignKey: "id_curso"});
  Cursos.hasMany(CursoAlumno, { as: "curso_alumnos", foreignKey: "id_curso"});
  Alumno.belongsTo(Nacionalidades, { as: "id_nacionalidad_Nacionalidade", foreignKey: "id_nacionalidad"});
  Nacionalidades.hasMany(Alumno, { as: "Alumnos", foreignKey: "id_nacionalidad"});

  return {
    Alumno,
    Categoria,
    Cursos,
    Direcciones,
    Nacionalidades,
    CursoAlumno,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
