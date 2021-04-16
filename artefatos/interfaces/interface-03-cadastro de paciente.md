# Interface de usuário 03 - Cadastro de novo paciente

## 1. Leiaute sugerido

![Formulario cadastro paciente](https://user-images.githubusercontent.com/69217117/114953508-e6098580-9e2e-11eb-9c85-89c1efeef4ca.jpg)

## 2. Relacionamentos com outras interfaces

O usuário terá acesso a outras interfaces por meio da home:
- Ao clicar no botão Agenda, ele terá acesso à página da agenda, com suas consultas;
- Ao clicar no botão Pacientes, ele será direcionado à página com a lista de pacientes e a busca;
- Ao clicar no botão Logout, ele será redirecionado à página de login;
- Ao clicar no botão Dados, tendo um paciente selecionado, ele terá acesso aos dados daquele paciente; 
- Ao clicar no botão Salvar, ele será direcionado ao perfil do paciente que acabou de ser cadastrado;

## 3. Campos

| **Número** | **Nome** | **Descrição** | **Valores válidos** | **Formato** | **Tipo** | **Restrições** |
| --- | --- | --- | --- | --- | --- | --- |
|1. |Nome|Nome do paciente|Letras|String|Caixa de texto|Não pode deixar vazio|
|2. |Imagem|Foto do paciente|imagem|jpg, jpeg, png|botão|Não permite upload de outros tipos de arquivo|
|3. |Prontuário|Número do prontuário|números|Inteiro|Caixa de texto|Número não pode se repetir|
|5. |Data de cadastro|Data que cadastro do paciente foi feito|Números e barras|String|Caixa de texto|Não pode deixar vazio|
|6. |Nascimento|Data de nascimento do paciente|Números e barras|String|Caixa de texto|Não pode deixar vazio|
|8. |Convênio|Convênio do paciente|Uma das opções da caixa de seleção|Caixa de seleção|Caixa de seleção|Alguma opção deve ser selecionada|
|9. |Sexo|Sexo do paciente|Uma das opções da caixa de seleção|Caixa de seleção|Caixa de seleção|Alguma opção deve ser selecionada|
|10. |Estado Civil|Estado civil do paciente|Uma das opções da caixa de seleção|Caixa de seleção|Caixa de seleção|Alguma opção deve ser selecionada|
|11. |Cor|Cor do paciente|Uma das opções da caixa de seleção|Caixa de seleção|Caixa de seleção|Alguma opção deve ser selecionada|
|12. |Naturalidade|Naturalidade do paciente|Letras|String|Caixa de texto|-|
|14. |CPF|CPF do paciente|Números|String|Caixa de texto|Não pode deixar vazio|
|15. |Profissão|Profissão do paciente|Letras|String|Caixa de texto|-|
|16. |Email para envio de informações médicas|Email do paciente|letras, números e caracteres especiais|String|Caixa de texto|Não pode deixar vazio|
|17. |Logradouro|Logradouro do paciente|Letras|String|Caixa de texto|Não pode deixar vazio|
|18. |Complemento|Complemento do paciente|Números|String|Caixa de texto|Deve ser preenchido apenas se for apartamento|
|19. |Bairro|Bairro do Paciente|Letras|String|Caixa de texto|Não pode deixar vazio|
|20. |Cidade|Cidade do paciente|Letras|String|Caixa de texto|Não pode deixar vazio|
|21. |UF|UF do paciente|Letras|String|Caixa de texto|Não pode deixar vazio|
|22. |CEP|CEP do paciente|Números|String|Caixa de texto|Não pode deixar vazio|
|23. |Telefone|Telefone de contato do paciente|Números|String|Caixa de texto|Não pode deixar vazio|
|24. |Observações|Observações|Letras|String|Caixa de texto|-|

## 4. Comandos

| **Número** | **Nome** | **Ação** | **Restrições** |
| --- | --- | --- | --- |
|1. |Salvar|Efetua cadastro de novo paciente|-|

