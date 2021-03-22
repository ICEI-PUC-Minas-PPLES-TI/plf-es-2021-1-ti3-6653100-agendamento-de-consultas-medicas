# Interface de usuário 05 - Perfil do usuário

## 1. Leiaute sugerido

![Perfil do paciente](https://user-images.githubusercontent.com/65324450/111715814-6f7b6700-8833-11eb-9b01-34029f3aa392.jpg)

## 2. Relacionamentos com outras interfaces

O usuário terá acesso a outras interfaces por meio da tela:
- Ao clicar no botão Agenda, ele terá acesso à página da agenda, com suas consultas;
- Ao clicar no botão Pacientes, ele será direcionado à página com a lista de pacientes e a busca;
- Ao clicar no botão Logout, ele será redirecionado à página de login;
- Ao clicar no botão Dados, ele terá acesso aos dados daquele paciente; 
- Ao clicar no botão Anamneses, ele será direcionado à tela com a ficha médica do paciente;
- Ao clicar no botão Consultas e retornos, ele terá acesso ao histórico das consultas do paciente e às datas de retorno;
- Ao clicar no botão Textos do paciente, ele terá acesso às observações sobre cada paciente;
- Ao clicar no botão Forms, ele terá acesso aos formulários do paciente;
- Ao clicar no botão Guias, ele terá acesso ao guias das receitas do paciente;

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
|15. |Titular do CPF|Titular do CPF|Letras|String|Caixa de texto|-|
|16. |Profissão|Profissão do paciente|Letras|String|Caixa de texto|-|
|17. |Email para envio de informações médicas|Email do paciente|letras, números e caracteres especiais|String|Caixa de texto|Não pode deixar vazio|
|18. |Logradouro|Logradouro do paciente|Letras|String|Caixa de texto|Não pode deixar vazio|
|19. |Complemento|Complemento do paciente|Números|String|Caixa de texto|Deve ser preenchido apenas se for apartamento|
|20. |Bairro|Bairro do Paciente|Letras|String|Caixa de texto|Não pode deixar vazio|
|21. |Cidade|Cidade do paciente|Letras|String|Caixa de texto|Não pode deixar vazio|
|22. |UF|UF do paciente|Letras|String|Caixa de texto|Não pode deixar vazio|
|23. |CEP|CEP do paciente|Números|String|Caixa de texto|Não pode deixar vazio|
|24. |Telefone|Telefone de contato do paciente|Números|String|Caixa de texto|Não pode deixar vazio|
|25. |Observações|Observações|Letras|String|Caixa de texto|-|

## 4. Comandos

| **Número** | **Nome** | **Ação** | **Restrições** |
| --- | --- | --- | --- |
|1. |Editar|Permite edição do cadastro do paciente|-|
|2. |Excluir|Exclui cadastro do paciente|-|
|3. |Anamneses| Direcionar usuário à ficha médica do paciente |-|
|4. |Consultas e retornos| Apresenta histórico das consultas do paciente e as datas de retorno |-|
|5. |Textos do paciente| Observações do médico sobre cada paciente |-|
|6. |Forms| Formulários do paciente |-|
|7. |Guias| Guias das receitas |-|
