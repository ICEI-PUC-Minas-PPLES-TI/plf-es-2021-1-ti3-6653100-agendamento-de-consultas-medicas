# AGENDAMENTO DE CONSULTAS MÉDICAS


**Isabel Pinheiro Matos, ipmatos2000@gmail.com**

**Júlia Martins Reis, juliamreis@gmail.com**

**Luiz Henrique de Jesus Ramos, 1043283@sga.pucminas.br**

**Rafael Augusto Vieira de Almeida, rafael.augusto098@gmail.com**

---

_Curso de Engenharia de Software, Unidade Praça da Liberdade_

_Instituto de Informática e Ciências Exatas – Pontifícia Universidade Católica de Minas Gerais (PUC MINAS), Belo Horizonte – MG – Brasil_

---

_**Resumo**. 
    O trabalho, referente a matéria TI-3: aplicações em cenários reais, tem como objetivo criar uma aplicação para o agendamento e gerenciamento de consultas médicas e de pacientes de um consultório de endocrinologia. O grupo, em reunião com o cliente Dr.Rosalvo, conseguiu identificar todas as suas satisfações e insatisfações com o sistema utilizado atualmente no consultório. A partir disso, pretendemos cumprir com essas exigências apresentadas pelo cliente com a nossa solução. Uma insatisfação que já conseguimos sanar foi em relação à presença de uma funcionalidade no sistema para a criação de pedidos de exame. 

---


## 1. Introdução


    1.1 Contextualização
Este trabalho consiste na criação de um sistema de agendamento e gerenciamento de consultas médicas e de pacientes do consultório de endocrinologia do Dr.Rosalvo. A solução é uma proposta de sistema para ser aplicada na área da saúde e segue a regulamentação do Conselho Regional de Medicina, restringindo alguns acessos que possuem dados confidenciais entre paciente e médico. 


    1.2 Problema
O Consultório de Endocrinologia do dr. Rosalvo Reis atualmente utiliza o software "Hi Doctor" para a sua organização. O sistema fornece agenda, prontuário médico, prescrição eletrônica, entre outras funcionalidades. Entretanto, foram declaradas as seguintes insatisfações com o software:

- não é possível localizar um cliente no sistema por meio de busca pela sua cidade;
- o visual do software, que poderia ser mais atrativo;
- a necessidade de sincronizar aparelhos toda vez que o software é utilizado em outro dispositivo;
- a falta da opção de preenchimento de formulário para pedidos de exames.


    1.3 Objetivo geral
O objetivo principal a ser alcançado nesse trabalho é desenvolver um sistema para auxiliar nosso cliente a gerenciar com mais eficácia o consultório. Este sistema deve possuir tudo o que ele precisa para que isso seja possível e deve sanar as insatisfações apresentadas.



        1.3.1 Objetivos específicos
 Os objetivos específicos deste trabalho são:
- Analisar o sistema atual (Hi Doctor) utilizado pelo médico.
- Identificar no sistema quais funcionalidades são utilizadas pelo médico e quais podem ser descartadas.
- Identificar as insatisfações do médico com o sistema.



    1.4 Justificativas
    
O Dr.Rosalvo é o único médico do consultório e utiliza um sistema generalizado para qualquer área da saúde. A partir disso, surgiu a demanda de um sistema mais específico e moderno que possua todas as funcionalidades que ele e a secretária precisam para gerenciar os pacientes do consultório e o agendamento das consultas. 



## 2. Stakeholders

O projeto possui dois stakeholders que são os únicos usuários do sistema: o médico(Dr.Rosalvo) e a secretária. Tanto o médico quanto a secretária desejam um sistema mais eficiente que atenda às necessidades específicas de cada um. 
Ambos desejam um software com visual mais atrativo e no qual seja possível localizar um cliente por meio de uma busca pela cidade.
Para o médico, seria ideal um sistema que possibilite a criação de pedidos de exames e que não seja necessário sincronizar manualmente a cada uso em diferentes dispositivos.


## 3. Proposta da solução

Pretendemos criar uma aplicação web sincronizada com um banco de dados em nuvem que, além de apresentar algumas das funcionalidades já existentes no "Hi Doctor", consiga sanar as insatisfações apresentadas pelo cliente, citadas no tópico "Problema". O sistema deve possuir cadastro de clientes, agenda e calendário, prontuário médico e prescrição eletrônica.

Requisitos funcionais do sistema:

-   Cada usuário deverá possuir seu login e senha	
-	Os dois usuários poderão cadastrar pacientes	
-	Os dois usuários poderão marcar consultas na agenda do sistema	
-	Os dois usuários deverão ter acesso à lista de pacientes	
-	Os dois usuários deverão conseguir localizar pacientes por meio de busca por nome, sobrenome, cidade, telefone, entre outros.	
-	O médico deverá cadastrar prontuários de pacientes	
-	Os dois usuários deverão ter acesso ao perfil de cada paciente com seus dados pessoais	
-	O médico deverá cadastrar pedidos de exame	
-	Os dois usuários deverão ter acesso à uma agenda, com todas as consultas em suas respectivas datas e horários	
-	Os dois usuários poderão excluir cadastros de pacientes	
-	Os dois usuários poderão desmarcar consultas na agenda do sistema	
-	Os dois usuários poderão remarcar consultas na agenda do sistema	
-	O médico poderá modificar prontuários já cadastrados	
-	O médico deverá ter acesso ao prontuário de cada paciente



## 4. Projeto da Solução

Na criação deste software foram utilizadas as seguintes tecnologias: 
- linguagem de marcação HTML e CSS; 
- a linguagem de programação Java Script; 
- a ferramenta node.js; 
- o framework bootstrap; 
- quanto ao banco de dados optamos por utilizar o MySql;
- para elaboração dos diagramas de caso de uso e de classe, utilizamos a ferramenta astah;
- para elaboração do diagrama de banco de dados, utilizamos a ferramenta draw.io;
- para elaboração dos wireframes, utilizamos a ferramenta figma;
- para repositório de código, documentação e planejamento das sprints utilizamos a ferramenta github.

Diagrama de casos de uso:

![Diagrama de caso de uso](https://user-images.githubusercontent.com/69217117/120393618-9876a880-c308-11eb-867f-9a3b7314b275.png)


## 5. Artefatos principais

Os artefatos criados para a solução do problema foram: 
- atas de reunião com o cliente e com equipe, descrevem o que foi decidido e discutido em cada reunião; 
- documento de visão que contém os requisitos funcionais e não funcionais;
- diagrama de banco de dados, representa a estrutura dos dados da aplicação a serem guardados no banco de dados;
- layoutes do sistema, que servem como um guia para desenvolvimento das telas e para validação com o cliente antes do desenvolvimento do sistema;
- descrição de cada interface, descreve o relacionamento da interface com outras, cada campo dessa interface e seus comandos;
- diagrama de classes, que é uma representação da estrutura das classes e suas relações para servir de modelo na programação orientada a objetos;
- diagrama de casos de uso, que descreve as principais funcionalidades do sistema e a interação dessas funcionalidades com os usuários;
- descrição dos casos de uso, no qual apresentamos para cada caso de uso sua descrição, seus atores, suas pré-condições, seu fluxo principal e seus fluxos alternativos;

Interface da home:
![Home](https://user-images.githubusercontent.com/69217117/120395652-b8f43200-c30b-11eb-899a-b723916f94f5.png)

Interface da tela de agendamento:
![Tela da agenda](https://user-images.githubusercontent.com/69217117/120395659-bb568c00-c30b-11eb-83a2-b66a5f6ee29b.jpg)

Interface da tela de cadastro de novo paciente:
![Formulario cadastro paciente](https://user-images.githubusercontent.com/69217117/120395944-3750d400-c30c-11eb-8b93-2f3675d2456c.jpg)


Diagrama de classes:
![Diagrama de classes](https://user-images.githubusercontent.com/69217117/120394229-83e6e000-c309-11eb-9ca0-388dbdecb498.png)


## 6. Conclusão

   Concluímos que para alcançarmos o objetivo inicial, o grupo teve que buscar conhecimento de formas alternativas. Uma das formas foi por meio de um curso de node.js disponibilizado pela plataforma udemy que nos auxiliou principalmente na parte do back-end.
O cliente, ciente que estamos em constante aprendizado, ficou bem satisfeito com o resultado alcançado.

O objetivo inicial era o desenvolvimento de um sistema que auxiliasse o cliente e a secretária com o gerenciamento eficaz das consultas e dos pacientes do consultório. Foi solicitado que o software possuísse algumas funcionalidades do sistema anterior, além de algumas mudanças.
As funcionalidades que foram requisitadas pelo cliente foram desenvolvidas da melhor forma possível (e conseguimos efetivamente solucionar os problemas apontados dentro da capacidade de cada um). 

O trabalho foi uma oportunidade de crescimento tanto pessoal quanto para trabalho em equipe. Nesse projeto, aplicamos o que vimos na teoria em outras matérias do curso, como por exemplo: engenharia de requisitos, banco de dados, desenvolvimento de interfaces web, entre outras. Além de correlacionar o conhecimento adquirido com  a nossa solução, conseguimos aplicar a divisão de tarefas, de responsabilidade com entregas, lidamos com problemas e além disso, adquirimos muito conhecimento técnico.



# REFERÊNCIAS

https://www.hidoctor.com.br/?pk_campaign=msSearchLeads&msclkid=fc43bf3f2cf51e6c4276df098a7fe8fb

https://www.crmmg.org.br/

https://portal.cfm.org.br/

# APÊNDICES

**Colocar link:**

Do repositório no github: https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2021-1-ti3-6653100-agendamento-de-consultas-medicas;

Do vídeo de apresentação.




