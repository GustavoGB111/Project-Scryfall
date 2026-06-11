# Projeto de integração da API do Scryfall
Esse projeto tem como base a integração da API ja pronta do Scryfall [Scryfall API](https://api.scryfall.com), tendo em vista diversos objetivos, como: Aprendizado, Facilidade na busca de cards(cartas) do Trading Card Game, Magic the Gathering.
# O que a API tem que fazer?
**A API moldada com a integração de outra API (Scryfall API) deve cumprir as seguinte funções:**
- buscar cartas no Scryfall (lista e páginas)
# Quais tecnologias e modelagens a API vai utilizar?
**A API irá utilizar das seguintes tecnologias para sua modelação:**
- Express (Para criação da API)
- Typeorm (Para integração com o DataBase)
- Swagger (Para Documentação e Teste de API)
- BCrypt (Para criptografia de senhas, transformá-las em hash)
- DB Postgresql (Para DataBase)
- DDD (Domain-Driver Design)
# Como devo atualizar instâncias do projeto?
**O projeto deve ser atualizado em instâncias por meio de scrips** 
- npm run start (atualiza o typescript, atualizando o dist para JS, logo depois inicia o servidor onde a API rodará)
# Processo de desenvolvimento do projeto
**O Projeto está sendo desenvolvido da seguinte forma:**
- 1-Criação das rotas e estrutura (express e BCrypt) 
- 2-Criação do banco de dados (TypeORM) 
- 3-Documentação e testes (Swagger) 
# Organização do projeto 
**O Projeto está sendo organizado da seguinte forma:**
- server.ts (Onde o banco de dados e o servidor inicializará por meio do express, além de onde serão utilizadas as rotas (que foram exportadas pelo 'Routes'))
- App (Pasta onde fica localizado a parte funcional do projeto)
- Service (Onde ficam a lógica de funcionamento e o cerne principal do código)
- Controller (onde vai ficar a tradução de dados, ele vai adptar dados do HTTP e vai transformar pra lógica da aplicação);
- Entities (Onde ficam os modelos de estrutura do banco de dados)
- Interface (Onde ficam os modelos de estrutura das classes e objetos e define como devem se comportar quando utilizadas )
- Middlewares (Onde fica o verificador do token JWT, é uma função que ocorre antes de algumas rotas serem executadas)
- Repositories (onde ficam os metodos pra alterar registros no banco de dados, utiliza-se das interfaces e das entities)
- Routes (onde serão organizadas as rotas da API, serve pra organização dos controllers);
- DB (onde fica o DataBase)
- Migrations (Onde ficam as migrações pro banco de dados)
- databaseConexion (Onde fica a conexão entre o DB e o código)