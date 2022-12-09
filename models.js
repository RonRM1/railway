const {sequelize} = require('./models/index');//devuelve db y yo quiero sequelize dentro de db por eso llaves
const initModels = require('./models/init-models');

const models = initModels(sequelize);

module.exports = models;
