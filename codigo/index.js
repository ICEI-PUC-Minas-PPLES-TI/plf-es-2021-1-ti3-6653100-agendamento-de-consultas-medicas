const express = require("express")
const app = express()
const bcrypt = require('bcryptjs')

const bodyParser = require("body-parser"); //traduzir dados enviados em uma estrutura js
const connection = require("./database/database");
const Usuario = require("./database/users");
const Paciente = require("./database/pacientes");
const Consulta = require("./database/consultas");

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

//gerenciando paciente

app.get("/novoPaciente", (req, res) => {
    res.render("cadastro")
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

    if(Paciente != undefined){

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
            res.redirect("/pacientes");
        });

    }else{
        res.redirect("/novoPaciente");
    }
})

app.get("/pacientes", (req, res) => {

    Paciente.findAll().then(pacientes => {
        res.render("locpaciente", {pacientes: pacientes});
    });
    
});

app.get("/pacientes/perfil/:id", (req, res) => {

    var id = req.params.id;

    Paciente.findByPk(id).then(paciente => {
        
        if(isNaN(id)){
            res.redirect("/pacientes");
        }
        if(paciente != undefined){
            res.render("perfilPaciente", {paciente: paciente});
        }else{
            res.redirect("/pacientes");
        }
        
    }).catch(erro => {
        res.redirect("/pacientes");
    });
    
});

app.post("/pacientes/delete", (req,res) => {
    var id = req.body.id;

    if(id != undefined){

        if(!isNaN(id)){ //id é numerico ou não

            Paciente.destroy({
                where: {
                    id: id
                }
            }).then(()=>{
                res.redirect("/pacientes");
            })

        }else{
            res.redirect("/pacientes");
        }

    }else{
        res.redirect("/pacientes");
    }
});

app.get("/pacientes/perfil/edit/:id", (req, res) => {

    var id = req.params.id;

    Paciente.findByPk(id).then(paciente => {
        
        if(isNaN(id)){
            res.redirect("/pacientes/perfil/:id");
        }
        
        if(paciente != undefined){
            res.render("editPaciente", {paciente: paciente});
        }else{
            res.redirect("/pacientes/perfil/:id");
        }
        
    }).catch(erro => {
        res.redirect("/pacientes/perfil/:id");
    });
    
});

app.post("/pacientes/update", (req,res) => {
    var id = req.body.id;
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

    Paciente.update({
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
    }, {
        where: {
            id: id
        }
    }).then(()=>{
        res.redirect("/pacientes/perfil/:id");
    });


});

//gerenciando consultas

app.get("/agenda", (req, res) => {
    Consulta.findAll().then(consultas => {
        res.render("date", {consultas: consultas});
    });
})

app.post("/salvarConsulta", (req, res) => {

    var hora = req.body.hora;
    var tipo = req.body.tipo;
    var nome = req.body.nome;
    var convenio = req.body.convenio;
    var valor = req.body.valor;
    var status = req.body.status;
    var chegada = req.body.chegada;
    var atendido = req.body.atendido;
    var notas = req.body.notas;

    if(Consulta != undefined){

        Consulta.create({

            hora: hora,
            tipo: tipo,
            nome: nome,
            convenio: convenio,
            valor: valor,
            status: status,
            chegada: chegada,
            atendido: atendido,
            notas: notas

        }).then(()=>{
            res.redirect("/agenda");
        });

    }else{
        res.redirect("/agenda");
    }
})

app.get("/agenda/consulta/:id", (req, res) => {

    var id = req.params.id;

    Consulta.findByPk(id).then(consulta => {
        
        if(isNaN(id)){
            res.redirect("/agenda");
        }
        if(consulta != undefined){
            res.render("dateEscolhida", {consulta: consulta});
        }else{
            res.redirect("/agenda");
        }
        
    }).catch(erro => {
        res.redirect("/agenda");
    });
    
});

app.post("/agenda/consulta/delete", (req,res) => {
    var id = req.body.id;

    if(id != undefined){

        if(!isNaN(id)){ //id é numerico ou não

            Consulta.destroy({
                where: {
                    id: id
                }
            }).then(()=>{
                res.redirect("/agenda");
            })

        }else{
            res.redirect("/agenda");
        }

    }else{
        res.redirect("/agenda");
    }
});

app.get("/agenda/consulta/edit/:id", (req, res) => {

    var id = req.params.id;

    Consulta.findByPk(id).then(consulta => {
        
        if(isNaN(id)){
            res.redirect("/agenda/consulta/:id");
        }
        
        if(consulta != undefined){
            res.render("editConsulta", {consulta: consulta});
        }else{
            res.redirect("/agenda/consulta/:id");
        }
        
    }).catch(erro => {
        res.redirect("/agenda/consulta/:id");
    });
    
});

app.post("/agenda/consulta/update", (req,res) => {
    var id = req.body.id;
    var hora = req.body.hora;
    var tipo = req.body.tipo;
    var nome = req.body.nome;
    var convenio = req.body.convenio;
    var valor = req.body.valor;
    var status = req.body.status;
    var chegada = req.body.chegada;
    var atendido = req.body.atendido;
    var notas = req.body.notas;

        Consulta.update({
            hora: hora,
            tipo: tipo,
            nome: nome,
            convenio: convenio,
            valor: valor,
            status: status,
            chegada: chegada,
            atendido: atendido,
            notas: notas
        }, {
            where: {
                id: id
            }

        }).then(()=>{
            res.redirect("/agenda/consulta/:id");
        });

});