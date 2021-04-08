# Interface de usuário NUM - NOME DA INTERFACE

## 1. Leiaute sugerido
![Tela da agenda](https://user-images.githubusercontent.com/69217117/114107088-a5e25a00-98a6-11eb-9754-ff0a57ce563d.jpg)

## 2. Relacionamentos com outras interfaces
O usuário terá acesso a outras interfaces por meio da home:
- Ao clicar no botão Pacientes, ele será direcionado à página com a lista de pacientes e a busca;
- Ao clicar no botão Logout, ele será redirecionado à página de login;
- Ao clicar no botão Novo Paciente, ele será direcionado ao formulário de cadastro de novo paciente;
- Ao clicar no botão Dados, tendo um paciente selecionado, ele terá acesso aos dados daquele paciente;


## 3. Campos

| **Número** | **Nome** | **Descrição** | **Valores válidos** | **Formato** | **Tipo** | **Restrições** |
| --- | --- | --- | --- | --- | --- | --- |
|1. | Hora | Horário da consulta | Números |Inteiro |Caixa de texto | Não pode ser vazio |
|2. |Tipo de compromisso | Mostra se a consulta é por convênio ou particular | Letras | String | Caixa de texto |Não pode ser vazio  |
|3. |Nome do paciente |Nome do paciente | Letras |String |Caixa de texto |Não pode ser vazio |
|4. |Convênio |Convênio do paciente |Uma das opções da caixa de seleção |Caixa de seleção |Caixa de seleção |Alguma opção deve ser selecionada |
|5. |Valor| Valor da consulta| Números | Inteiros| Caixa de texto|Não permite letras|
|6. |Status |Exibe se o paciente foi atendido ou se nao compareceu |Uma das opções da caixa de seleção |Caixa de seleção | Caixa de seleção |Alguma opção deve ser selecionada |
|7. |Chegada |Mostra a hora de chegada do paciente |Números |Inteiro | Caixa de texto |Não pode ser vazio |
|8. |Atendido |Mostra a hora que o paciente foi atendido |Números |Inteiro | Caixa de texto|Não pode ser vazio |
|9. |Notas |Campo para digitar notas relacionadas ao paciente |Letras |String |Caixa de texto | - |

## 4. Comandos

| **Número** | **Nome** | **Ação** | **Restrições** |
| --- | --- | --- | --- |
|1. |Gravar | Grava a consulta do paciente na agenda | - |
|2. |Novo | Abre novo formulário vazio para preenchimento de nova consulta | - |
|3. |Remarcar | Deletar informações do horário atual para marcar novo horário | - |
|4. |Desmarcar| Deleta dados da consulta marcada | - |
|5. |Botao de busca| Busca o nome do paciente| - |



