const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Cursos.init(sequelize, DataTypes);
}

class Cursos extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_curso: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NombreCurso: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    id_categoria: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Categoria',
        key: 'id_categoria'
      }
    }
  }, {
    sequelize,
    tableName: 'Cursos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_curso" },
        ]
      },
      {
        name: "id_categoria",
        using: "BTREE",
        fields: [
          { name: "id_categoria" },
        ]
      },
    ]
  });
  }
}
