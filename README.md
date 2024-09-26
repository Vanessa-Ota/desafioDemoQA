# desafioDemoQA
Desafio QA-Vale


**Projeto de Automação de Testes**
Este projeto automatiza a interação com diferentes elementos de uma página web, incluindo formulários, botões, calendários, campos de upload e testes de API, utilizando Selenium com JavaScript.
 O projeto também utiliza dados fornecidos via JSON para preencher formulários dinamicamente.

**Tecnologias Utilizadas**
* Node.js: Ambiente de execução do JavaScript.
* Selenium WebDriver: Para automação de navegadores.
* JSON: Fonte de dados para simular inputs de usuários.
* 
**Funcionalidades do Projeto**

**1. Interação com Formulários**
O projeto realiza automação de preenchimento de formulários com campos como:
* Campos de texto: Preenchidos com dados de clientes.
* Botões de seleção (radio buttons): Seleção com base em opções dinâmicas.
* Checkboxes: Seleção de múltiplas opções provenientes de um array JSON.
* Calendário: Preenchimento manual de campos de data, desmembrando as partes do formato MM-DD-YYYY.
* Caixas de seleção: Seleção de estados e cidades pré-carregadas.

**2. Upload de Arquivos**
O teste automatiza o envio de arquivos em campos de upload, incluindo seleção de arquivos armazenados localmente no projeto.

**3. Scroll na Página**
Automação de rolagem da página, com o comando para rolar até o final automaticamente.

**4. Testes em Tabelas**
Automação para:
* Criar novos registros em uma tabela.
* Remover registros de uma tabela baseada em critérios de nome.
* Editar registros existentes.

**5. Testes de API**
Realiza testes de API, incluindo:
* Criação de usuários via requisições.
* Geração de token de acesso para o usuário.
* Verificação de autorização usando o token gerado.

**Pré-requisitos**
Certifique-se de ter instalado:
* Node.js
* Selenium WebDriver
* axios

**Execução**
Para executar os testes FrontEnd, use o comando:
node  runTests.js

**Para executar teste específico de API:**
cd tests/  node APIs.js


