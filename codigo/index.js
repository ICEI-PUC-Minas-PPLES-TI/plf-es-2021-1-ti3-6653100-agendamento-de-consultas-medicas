const express = require("express")
const app = express()
const bcrypt = require('bcryptjs')

const bodyParser = require("body-parser"); //traduzir dados enviados em uma estrutura js
const connection = require("./database/database");
const Usuario = require("./database/users");

//Database
connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com sucesso");
    })
    .catch((msgErro) => {
        console.log(msgErro);
    })


app.get("/", (req, res) => {
    res.render("index")
})

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(5001, () => {
    console.log("Server is started")
})

app.post("/", (req, res) => {

    var email = req.body.email;
    var senha = req.body.senha;

    Usuario.findOne({where: {email: email}}).then(usuario => {

        if(usuario != undefined){

            var correct = bcrypt.compareSync(senha, usuario.senha)

            if(correct){
                res.render("home", {
                    usuario: usuario
                });
            }
            else{
                res.redirect("/");
            }
        }
        else{
            res.redirect("/");
        }
    })

})