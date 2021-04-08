# Caso de uso 02 - Gerenciar Paciente

## 1. Descrição

Cadastro de pacientes e Vizualização, Edição e Exclusão deste cadastro.

## 2. Atores

Usuário (Médico ou Secretária)

## 3. Precondições

	1. Usuário deve estar logado na plataforma
 
## 4. Fluxo principal

    1.O caso de uso se inicia quando o usuário clica no botão Novo Paciente no menu lateral;
	2. O usuário preenche os campos do formulário com os dados do paciente;
	3. O usuário clica em salvar;
	4. O usuário é direcionado para a página de perfil do paciente que acabou de ser cadastrado.

## 5. Fluxos alternativos

### 5.1 Fluxo alternativo Visualização do perfil do paciente

**Precondições**  
1. Usuário deve estar logado na plataforma; 
2. O paciente a ser visualizado já deve ter sido cadastrado;

**Passos**        
1. O caso de uso se inicia na quando o usuário está na página Pacientes, após ter efetuado a busca;
2. O usuário clica no item (resultado da busca) que corresponde ao paciente cujos dados ele quer acessar;
3. O usuário será direcionado à pagina de perfil do paciente que contém todos os seus dados.

### 5.2 Fluxo alternativo Edição dos dados do paciente

**Precondições**  
1. Usuário deve estar logado na plataforma;
2. O paciente a ser editado já deve ter sido cadastrado;

**Passos**        
1. O caso de uso se inicia na quando o usuário está na página Pacientes, após ter efetuado a busca;
2. O usuário clica no item (resultado da busca) que corresponde ao paciente cujos dados ele quer acessar;
3. O usuário será direcionado à pagina de perfil do paciente;
4. O usuário clica no botão editar do menu lateral;
5. O usuário altera os dados que precisam ser modificados;
6. O usuário clica em salvar e salva as alterações.
