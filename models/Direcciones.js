const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Direcciones.init(sequelize, DataTypes);
}

class Direcciones extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_direccion: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    calle: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    Numero: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_alumno: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Alumno',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Direcciones',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_direccion" },
        ]
      },
      {
        name: "id_alumno",
        using: "BTREE",
        fields: [
          { name: "id_alumno" },
        ]
      },
    ]
  });
  }
}
