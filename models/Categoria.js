const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Categoria.init(sequelize, DataTypes);
}

class Categoria extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_categoria: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NombreCategoria: {
      type: DataTypes.STRING(40),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Categoria',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_categoria" },
        ]
      },
    ]
  });
  }
}
