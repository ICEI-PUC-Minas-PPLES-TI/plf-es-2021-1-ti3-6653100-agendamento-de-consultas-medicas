# Interface de usuário 05 - Perfil do paciente

## 1. Leiaute sugerido

![Perfil do paciente](https://user-images.githubusercontent.com/69217117/112547145-211d1980-8d99-11eb-882d-4e8e24e465d2.jpg)

## 2. Relacionamentos com outras interfaces

O usuário terá acesso a outras interfaces por meio da tela:
- Ao clicar no botão Agenda, ele terá acesso à página da agenda, com suas consultas;
- Ao clicar no botão Pacientes, ele será direcionado à página com a lista de pacientes e a busca;
- Ao clicar no botão Logout, ele será redirecionado à página de login;
- Ao clicar no botão Dados, ele terá acesso aos dados daquele paciente; 
- Ao clicar no botão Anamneses, ele será direcionado à tela com a ficha médica do paciente;
- Ao clicar no botão Exames, ele terá acesso aos pedidos de exame daquele paciente;
- Ao clicar no botão Receitas, ele terá acesso às receitas médicas daquele paciente;

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
|4. |Exames | Pedidos de exames do médico para cada paciente |-|
|5. |Receitas| Receitas do médico para cada paciente |-|

