const Sequelize = require ('sequelize'); //importando módulo

const connection = new Sequelize('tis3', 'root', '35117423', {
    host: 'localhost', 
    dialect: 'mysql' ,
    timezone: "-03:00"
});

module.exports = connection;