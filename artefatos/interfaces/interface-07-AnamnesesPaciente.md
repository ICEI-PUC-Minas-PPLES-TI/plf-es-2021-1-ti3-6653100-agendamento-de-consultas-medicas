# Interface de usuário 07 - Anamneses do paciente

## 1. Leiaute sugerido

![Perfil do paciente (4)](https://user-images.githubusercontent.com/58401291/114781361-f21e1600-9d4e-11eb-87fa-415ebaee2cf5.jpg)


## 2. Relacionamentos com outras interfaces

O usuário terá acesso a outras interfaces por meio da tela:

1. Ao clicar no botão Agenda, ele terá acesso à página da agenda, com suas consultas;
2. Ao clicar no botão Pacientes, ele será direcionado à página com a lista de pacientes e a busca;
3. Ao clicar no botão Logout, ele será redirecionado à página de login;
4. Ao clicar no botão Dados, ele terá acesso aos dados daquele paciente;
5. Ao clicar no botão Exames, ele terá acesso aos pedidos de exame daquele paciente;
6. Ao clicar no botão Receitas, ele terá acesso às receitas médicas daquele paciente;

## 3. Campos

| **Número** | **Nome** | **Descrição** | **Valores válidos** | **Formato** | **Tipo** | **Restrições** |
| --- | --- | --- | --- | --- | --- | --- |
|1. | Nome do paciente| nome do paciente | letras| String|Caixa de texto| - |
|2. | Texto de anamneses| anamneses do paciente | letras , números e caracteres especiais| String | Caixa de Texto | - |


## 4. Comandos

| **Número** | **Nome** | **Ação** | **Restrições** |
| --- | --- | --- | --- |
|1. | Salvar| Salvar a alteração da anamnese | - |
