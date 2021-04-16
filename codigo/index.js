const express = require("express")
const app = express()
const bcrypt = require('bcryptjs')

const bodyParser = require("body-parser"); //traduzir dados enviados em uma estrutura js
const connection = require("./database/database");
const Usuario = require("./database/users");
const Paciente = require("./database/pacientes");

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

app.get("/novoPaciente", (req, res) => {
    res.render("cadastro")
})

app.get("/pacientes", (req, res) => {
    res.render("locpaciente")
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

app.post("/salvarPaciente", (req, res) => {

    var nome = req.body.nome;
    var prontuario = req.body.prontuario;
    var dataCadastro = req.body.dataCadastro;
    var nascimento = req.body.nascimento;
    var convenio = req.body.convenio;
    var sexo = req.body.sexo;
    var estadoCivil= req.body.estadoCivil;
    var cor = req.body.cor;
    var naturalidade = req.body.naturalidade;
    var cpf = req.body.cpf;
    var profissao = req.body.profissao;
    var email = req.body.email;
    var logradouro = req.body.logradouro;
    var complemento = req.body.complemento;
    var bairro = req.body.bairro;
    var cidade = req.body.cidade;
    var observacoes = req.body.observacoes;
    var uf = req.body.uf;
    var cep = req.body.cep;
    var telefone = req.body.telefone;


    Paciente.create({

        nome: nome,
        prontuario: prontuario,
        dataCadastro: dataCadastro,
        nascimento: nascimento,
        convenio: convenio,
        sexo: sexo,
        estadoCivil: estadoCivil,
        cor: cor,
        naturalidade: naturalidade,
        cpf: cpf,
        profissao, profissao,
        email: email,
        logradouro: logradouro,
        complemento: complemento,
        bairro: bairro,
        cidade: cidade,
        observacoes: observacoes,
        uf: uf,
        cep: cep,
        telefone: telefone

    }).then(()=>{
        res.redirect("/perfilPaciente");
    })
})