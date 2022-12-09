const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Alumno.init(sequelize, DataTypes);
}

class Alumno extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Nombre: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    Apellido: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    Edad: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Activo: {
      type: DataTypes.ENUM('si','no'),
      allowNull: true
    },
    id_nacionalidad: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Nacionalidades',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Alumno',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "id_nacionalidad",
        using: "BTREE",
        fields: [
          { name: "id_nacionalidad" },
        ]
      },
    ]
  });
  }
}
