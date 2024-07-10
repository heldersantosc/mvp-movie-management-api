# Movie Management API

## Descrição
API RESTful para gerenciamento de filmes, construída com Node.js e Express.

## Instalação
Certifique-se de ter o Node.js instalado na sua máquina.

1. Clone este repositório:
```bash
   git clone https://github.com/heldersantosc/mvp-movie-management-api.git
```

1. Instale as dependências:
```bash
   cd mvp-movie-management-api
   npm install
```


## Uso

1. Inicie o servidor:
```bash
   npm start
```

2. A API estará disponível em http://localhost:3000.


## Documentação da API
A documentação da API está disponível através do Swagger UI.

- Local: http://localhost:3000/api-docs


## Como subir usando Docker Compose
Para executar a aplicação utilizando Docker Compose, siga os passos abaixo:

1. Certifique-se de ter o Docker e o Docker Compose instalados na sua máquina.

2. No diretório raiz do projeto, onde está localizado o arquivo docker-compose.yml, execute o seguinte comando:
 ```bash
    docker-compose up
```

3. O Docker Compose irá construir as imagens e iniciar os containers da aplicação.

4. A API estará disponível em http://localhost:3000.
