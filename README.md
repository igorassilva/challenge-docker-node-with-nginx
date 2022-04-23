# Desafio Docker NodeJS com Nginx

## Desafio

Utilizar o Nginx como proxy reverso. Quando o usuário acessar o Nginx, o mesmo deve fazer uma chamada a aplicação NodeJS. Essa aplicação deve adicionar um registro ao banco de dados MySQL, cadastrando um nome na tabela *people*.

## Comandos

Com o docker devidamente instalado, rode o seguinte comando para executar o projeto:
`docker-compose up -d`

Para acessar a aplicação, basta acessar o endereço http://localhost:8080. Nela deve ser exibida um título com a mensagem **FullCycle Rocks!** e uma lista com alguns nomes que foram cadastrados e buscados do banco de dados.