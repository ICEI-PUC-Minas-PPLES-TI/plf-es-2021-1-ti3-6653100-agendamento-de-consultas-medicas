# Caso de uso 02 - Gerenciar Paciente

## 1. Descrição

Cadastro de pacientes e Vizualização, Edição e Exclusão deste cadastro.

## 2. Atores

Usuário (Médico ou Secretária)

## 3. Precondições

	1. Usuário deve estar logado na plataforma
	2. O paciente a ser visualizado já deve ter sido cadastrado;

## 4. Fluxo principal

    1.O caso de uso se inicia quando o usuário clica no botão Pacientes;
	2. O usuário escolhe o filtro de busca;
	3. O usuário digita a chave de busca desejada;
	4. O usuário seleciona o paciente em questão;
	5. O usuário é direcionado à página de perfil do paciente que contém todos os seus dados.

## 5. Fluxos alternativos

### 5.1 Fluxo alternativo Cadastro de novo paciente: começa a partir da etapa 1

**Precondições**  
1. Usuário deve estar logado na plataforma;

**Passos** 
1. O caso de uso se inicia quando o usuário clica no botão Novo Paciente no menu lateral;
2. O usuário preenche os campos do formulário com os dados do paciente;
3. O usuário clica em salvar;
4. O usuário é direcionado para a página de perfil do paciente que acabou de ser cadastrado.

### 5.2 Fluxo alternativo Edição dos dados do paciente: começa a partir da etapa 6

**Passos**        
1. O usuário clica no botão editar do menu lateral;
2. O usuário altera os dados que precisam ser modificados;
3. O usuário clica em salvar e salva as alterações.

### 5.3 Fluxo alternativo Exclusão do cadastro de paciente: começa a partir da etapa 6

**Passos**        
1. O usuário clica no botão excluir do menu lateral;
2. O usuário confirma a exclusão do paciente.

