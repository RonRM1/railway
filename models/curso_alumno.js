const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return CursoAlumno.init(sequelize, DataTypes);
}

class CursoAlumno extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_curso_alumno: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_alumno: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Alumno',
        key: 'id'
      }
    },
    id_curso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Cursos',
        key: 'id_curso'
      }
    }
  }, {
    sequelize,
    tableName: 'curso_alumno',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_curso_alumno" },
        ]
      },
      {
        name: "id_alumno",
        using: "BTREE",
        fields: [
          { name: "id_alumno" },
        ]
      },
      {
        name: "id_curso",
        using: "BTREE",
        fields: [
          { name: "id_curso" },
        ]
      },
    ]
  });
  }
}
