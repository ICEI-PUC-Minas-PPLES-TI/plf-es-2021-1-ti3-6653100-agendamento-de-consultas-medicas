# Interface de usuário 04 - TELA DE BUSCA DE PACIENTES

## 1. Leiaute sugerido

![Tela de busca de pacientes](https://user-images.githubusercontent.com/69217117/112061241-f5055c80-8b3c-11eb-8e3b-8143e4aadbde.jpg)

## 2. Relacionamentos com outras interfaces
O usuário terá acesso a outras interfaces por meio da tela de busca:
  - Ao clicar no botão Agenda, ele terá acesso à página da agenda, com suas consultas;
  - Ao clicar no botão Pacientes, ele será direcionado à página com a lista de pacientes e a busca;
  - Ao clicar no botão Logout, ele será redirecionado à página de login;
  - Ao clicar no botão Novo Paciente, ele será direcionado ao formulário de cadastro de novo paciente;
  - Ao clicar no botão Dados, tendo um paciente selecionado, ele terá acesso aos dados daquele paciente; 
  - Ao clicar no item da lista, ele será direcionado ao perfil do paciente.
  
## 3. Campos

| **Número** | **Nome** | **Descrição** | **Valores válidos** | **Formato** | **Tipo** | **Restrições** |
| --- | --- | --- | --- | --- | --- | --- |
|1. | Filtro de busca | Determinar forma de busca | Uma das opções da caixa de seleção | Caixa de seleção | Caixa de seleção | Só permite uma busca por vez |
|2. | Busca | Chave de busca | Letras e números | String | Caixa de texto | - |
|3. | Lista  | Resultado da busca | - | Lista de itens | Lista de itens| - |

## 4. Comandos

| **Número** | **Nome** | **Ação** | **Restrições** |
| --- | --- | --- | --- |
|1. |Clicar no item da lista | Direciona o usuário ao perfil do paciente | - |



