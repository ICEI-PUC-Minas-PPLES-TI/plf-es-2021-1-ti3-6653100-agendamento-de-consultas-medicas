const Sequelize = require ('sequelize'); //importando módulo

const connection = new Sequelize('tis3', 'root', 'senha', {
    host: 'localhost', 
    dialect: 'mysql'
});

module.exports = connection;