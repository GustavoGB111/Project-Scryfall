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
- npm run dev (inicia o servidor onde a API rodará)
- npm run build (atualiza o typescript, consequentemente atualizando o dist para JS)
# Processo de desenvolvimento do projeto
**O Projeto está sendo desenvolvido da seguinte forma:**
- 1-Criação das rotas e estrutura (express e BCrypt) 
- 2-Criação do banco de dado (TypeORM)
- 3-Documentação e testes (Swagger)