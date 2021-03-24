const Sequelize = require ("sequelize");
const connection = require("./database");

const Usuario = connection.define('user', {
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },
    senha:{
        type: Sequelize.STRING,
        allowNull: false 
    }
});

//vai criar a tabela se não existir. Se existir, não vai forçar a criação
Usuario.sync({force: false}).then(() => {}); 

//criando os usuários e senhas se não existirem
Usuario.findOrCreate({
    where: {id: 1},
    defaults: {
        email: "medico@gmail.com",
        senha: "12345"
    }
});
Usuario.findOrCreate({
    where: {id: 2},
    defaults: {
        email: "secretaria@gmail.com",
        senha: "12345"
    }
});

module.exports = Usuario;