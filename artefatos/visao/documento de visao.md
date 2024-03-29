# Documento de Visão - Agendamento de Consultas Médicas

**Data/hora:** 25/02/2021, 22:00  

## Autores
- Isabel Pinheiro Matos
- Júlia Martins Reis
- Luiz Henrique de Jesus Ramos
- Rafael Augusto Vieira de Almeida 

## Fornecedor(es) de Requisitos

| Nome | E-mail | Cargo ou Função - Empresa |
| --- | --- | --- |
|Rosalvo Reis|rrendocrinologia@gmail.com|Médico Endocrinologista|

## Descrição do Problema

O Consultório de Endocrinologia do dr. Rosalvo Reis atualmente utiliza o software "Hi Doctor" para a sua organização. O sistema fornece agenda, prontuário médico, prescrição eletrônica, entre outras funcionalidades. Entretanto, foram declaradas as seguintes insatisfações com o software: 
- não é possível localizar um cliente no sistema por meio de busca pela sua cidade (principal foco);
- o visual do software, que poderia ser mais atrativo;
- a necessidade de sincronizar aparelhos toda vez que o software é utilizado em outro dispositivo; 
- a falta da opção de preenchimento de formulário para pedidos de exames.

## Descrição Geral da Solução (Escopo)

Pretendemos criar uma aplicação web sincronizada com um banco de dados em nuvem que, além de apresentar algumas das funcionalidades já existentes no "Hi Doctor", consiga sanar as insatisfações apresentadas pelo cliente, citadas acima. O sistema deve possuir cadastro de clientes, agenda e calendário, prontuário médico, prescrição eletrônica.

## Fora do Escopo

- Aplicação mobile
- Manutenção do software
- Relatorios estatísticos
- Cadastro de Diagnósticos de Doenças (CID)

## Usuários

Médico e secretária.

## Requisitos Funcionais

| ID | Descrição do Requisito | Prioridade | Complexidade |
| --- | --- | --- | --- |
|1|Cada usuário deverá possuir seu login e senha| alta | baixa |
|2|Os dois usuários poderão cadastrar pacientes| alta | média |
|3|Os dois usuários poderão marcar consultas na agenda do sistema| alta | alta |
|4|Os dois usuários deverão ter acesso à lista de pacientes| alta | baixa |
|5|Os dois usuários deverão conseguir localizar pacientes por meio de busca por nome, sobrenome, cidade, telefone, entre outros.| alta | alta |
|6|O médico deverá cadastrar prontuários de pacientes| alta | média |
|7|Os dois usuários deverão ter acesso ao perfil de cada paciente com seus dados pessoais| alta | média |
|8|O médico deverá cadastrar pedidos de exame| alta | média |
|9|Os dois usuários deverão ter acesso à uma agenda, com todas as consultas em suas respectivas datas e horários| alta | média |
|10|Os dois usuários poderão excluir cadastros de pacientes| média | média |
|11|Os dois usuários poderão desmarcar consultas na agenda do sistema| média | média |
|12|Os dois usuários poderão remarcar consultas na agenda do sistema| média | média |
|13|O médico poderá modificar prontuários já cadastrados| média | média |
|14|O médico deverá ter acesso ao prontuário de cada paciente| média | média |


## Requisitos Não Funcionais

| ID | Descrição do Requisito | Prioridade | Complexidade |
| --- | --- | --- | --- |
|1|O sistema deverá ser integrado com banco de dados em nuvem para garantir sincronização automática dos dados| alta | alta |
|2|O sistema deve suportar dois usuários logados simultâneamente | alta | média |
|3|O sistema deve atualizar a lista de pacientes após um cadastro em, no máximo, dois segundos| média | baixa |
|4|Para cadastrar um cliente deve-se gastar no máximo 3 cliques| baixa | baixa |


## Técnica(s) de Elicitação Utilizada(s)
A técnica de elicitação utilizada foi a entrevista com o cliente, na qual debatemos sobre as preferências para o sistema e as insatisfações com o software atual utilizado. Outra técnica foi a partir da análise do software que é utilizado pelo médico.
