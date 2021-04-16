const Sequelize = require ('sequelize'); //importando módulo

const connection = new Sequelize('tis3', 'root', 'bel78477847', {
    host: 'localhost', 
    dialect: 'mysql'
});

module.exports = connection;