var cors = require("cors")
const express = require("express")
const app = express()
const bcrypt = require('bcryptjs')
const nodemailer = require("nodemailer")
const crypto = require("crypto")

const bodyParser = require("body-parser"); //traduzir dados enviados em uma estrutura js
const connection = require("./database/database");
const Usuario = require("./database/users");
const Paciente = require("./database/pacientes");
const Consulta = require("./database/consultas");

app.use(cors())

app.use(express.json())

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

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(5001, () => {
    console.log("Server is started")
})

app.post("/", (req, res) => {

    var email = req.body.email;
    var senha = req.body.senha;

    Usuario.findOne({ where: { email: email } }).then(usuario => {

        if (usuario != undefined) {

            var correct = bcrypt.compareSync(senha, usuario.senha)

            if (correct) {
                res.render("home", {
                    usuario: usuario
                });
            }
            else {
                res.redirect("/");
            }
        }
        else {
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
    var estadoCivil = req.body.estadoCivil;
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

    if (Paciente != undefined) {

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

        }).then(() => {
            res.redirect("/pacientes");
        });

    } else {
        res.redirect("/novoPaciente");
    }
})

app.get("/pacientes", (req, res) => {

    Paciente.findAll().then(pacientes => {
        res.render("locpaciente", { pacientes: pacientes });
    });

});

app.get("/pacientes/perfil/:id", (req, res) => {

    var id = req.params.id;

    Paciente.findByPk(id).then(paciente => {

        if (isNaN(id)) {
            res.redirect("/pacientes");
        }
        if (paciente != undefined) {
            res.render("perfilPaciente", { paciente: paciente });
        } else {
            res.redirect("/pacientes");
        }

    }).catch(erro => {
        res.redirect("/pacientes");
    });

});

app.post("/pacientes/delete", (req, res) => {
    var id = req.body.id;

    if (id != undefined) {

        if (!isNaN(id)) { //id é numerico ou não

            Paciente.destroy({
                where: {
                    id: id
                }
            }).then(() => {
                res.redirect("/pacientes");
            })

        } else {
            res.redirect("/pacientes");
        }

    } else {
        res.redirect("/pacientes");
    }
});

app.get("/pacientes/perfil/edit/:id", (req, res) => {

    var id = req.params.id;

    Paciente.findByPk(id).then(paciente => {

        if (isNaN(id)) {
            res.redirect("/pacientes/perfil/:id");
        }

        if (paciente != undefined) {
            res.render("editPaciente", { paciente: paciente });
        } else {
            res.redirect("/pacientes/perfil/:id");
        }

    }).catch(erro => {
        res.redirect("/pacientes/perfil/:id");
    });

});

app.post("/pacientes/update", (req, res) => {
    var id = req.body.id;
    var nome = req.body.nome;
    var prontuario = req.body.prontuario;
    var dataCadastro = req.body.dataCadastro;
    var nascimento = req.body.nascimento;
    var convenio = req.body.convenio;
    var sexo = req.body.sexo;
    var estadoCivil = req.body.estadoCivil;
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
    }).then(() => {
        res.redirect("/pacientes/perfil/:id");
    });


});

//gerenciando consultas

app.get("/agenda", (req, res) => {

    let date = new Date();

    let day = date.getDate();
	if (day < 10) {
		day = '0' + day;
	}

	let month = date.getMonth() + 1;
	if (month < 10) {
		month = '0' + month;
	}

	let year = date.getFullYear();

	let data = new String;
    data = day + '/' + month + '/' + year ;

    Consulta.findAll({
        where: {
            data: data,
        },
        include: [{
            model: Paciente,
        }] //pega dados do relacionamento
    }).then(consultas => {
        Paciente.findAll().then(pacientes => {
            res.render("date", { consultas: consultas, pacientes: pacientes });
        })
    });

})

app.get("/agenda/:data", (req, res) => {

    var data = req.params.data;

    Consulta.findAll({
        where: {
            data: data,
        },
    }).then(consultas => {
        res.render("date", { consultas: consultas });
    });

})

app.post("/salvarConsulta", (req, res) => {

    var data = req.body.data;
    var hora = req.body.hora;
    var tipo = req.body.tipo;
    var convenio = req.body.convenio;
    var valor = req.body.valor;
    var status = req.body.status;
    var chegada = req.body.chegada;
    var atendido = req.body.atendido;
    var notas = req.body.notas;
    var paciente = req.body.paciente;

    if (Consulta != undefined) {

        Consulta.create({

            data: data,
            hora: hora,
            tipo: tipo,
            convenio: convenio,
            valor: valor,
            status: status,
            chegada: chegada,
            atendido: atendido,
            notas: notas,
            pacienteId: paciente,

        }).then(() => {
            res.redirect("/agenda");
        });

    } else {
        res.redirect("/agenda");
    }
})

app.get("/agenda/consulta/:id", (req, res) => {

    var id = req.params.id;

    Consulta.findAll({
        where: {
            id: id,
        },
        include: [{
            model: Paciente,
        }] //pega dados do relacionamento
    
    }).then(consultas => {

        if (isNaN(id)) {
            res.redirect("/agenda");
        }
        if (consultas != undefined) {
            res.render("dateEscolhida", { consultas: consultas });
        } else {
            res.redirect("/agenda");
        }

    }).catch(erro => {
        res.redirect("/agenda");
    });

});

app.post("/agenda/consulta/delete", (req, res) => {
    var id = req.body.id;

    if (id != undefined) {

        if (!isNaN(id)) { //id é numerico ou não

            Consulta.destroy({
                where: {
                    id: id
                }
            }).then(() => {
                res.redirect("/agenda");
            })

        } else {
            res.redirect("/agenda");
        }

    } else {
        res.redirect("/agenda");
    }
});

app.get("/agenda/consulta/edit/:id", (req, res) => {

    var id = req.params.id;

    Consulta.findAll({
        where: {
            id: id,
        },
        include: [{
            model: Paciente,
        }] //pega dados do relacionamento
    
    }).then(consultas => {

        if (isNaN(id)) {
            res.redirect("/agenda/consulta/:id");
        }

        if (consultas != undefined) {
            Paciente.findAll().then(pacientes => {
                res.render("editConsulta", { consultas: consultas, pacientes: pacientes });
            })
        } else {
            res.redirect("/agenda/consulta/:id");
        }

    }).catch(erro => {
        res.redirect("/agenda/consulta/:id");
    });

});

app.post("/agenda/consulta/update", (req, res) => {
    var id = req.body.id;
    var hora = req.body.hora;
    var tipo = req.body.tipo;
    var convenio = req.body.convenio;
    var valor = req.body.valor;
    var status = req.body.status;
    var chegada = req.body.chegada;
    var atendido = req.body.atendido;
    var notas = req.body.notas;
    var paciente = req.body.paciente;

    Consulta.update({
        hora: hora,
        tipo: tipo,
        convenio: convenio,
        valor: valor,
        status: status,
        chegada: chegada,
        atendido: atendido,
        notas: notas,
        pacienteId: paciente,
    }, {
        where: {
            id: id
        }

    }).then(() => {
        res.redirect("/agenda/consulta/:id");
    });

});

//recuperarSenha

app.get("/recuperarSenha", (req, res) => {

    res.render("recuperarSenha");

});

app.post("/recuperarSenha", (req, res) => {

const email = req.body.email

try {

Usuario.findOne({
    where: {
        email: email
    }
})

    const transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "b2cdf13d14f9d6",
            pass: "218f41d04fa05f"
       }
    })

        const newPassword = crypto.randomBytes(4).toString('HEX')

        transporter.sendMail({
            from: 'Administrador <29d704b73c-ee302f@inbox.mailtrap.io>',
            to: email,
            subject: 'Recuperacao de senha!',
            html: `<p>Ola , sua nova senha para acessar o sistema ${newPassword}</p><br/><a href="http://localhost:5001/">Sistema</a>`
        }).then(
                () => {

                
                        Usuario.update({senha : newPassword},{
                            where: {
                                email: email
                            }
                         }).then(
                            () => {
                                return res.status(200).json({ message: 'Email sended'})
                            }
                            ).catch(
                            () => {
                                return response.status(404).json({ message: 'User not found'})
                            }
                        )

                
            }
        ).catch(
            () => {
                return res.status(404).json({message: 'fail to send email'})
            }
        )

    } catch(error) {
    return res.status(404).json({message : 'User not found'})
}

});