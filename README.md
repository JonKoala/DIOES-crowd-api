# diariobot-webapp-api
API para as aplicações web do diariobot.

### Requisitos
 - [Node](https://nodejs.org) >= 6.9
 - Database SQL Server 2014

### Instalação
Clone o projeto para a sua máquina e acesse o diretório do mesmo.
``` bash
git clone https://github.com/JonKoala/diariobot-webapp-api.git
cd diariobot-webapp-api
```
Instale as dependências.
``` bash
npm install
```

### Configuração
O projeto depende de um arquivo `appconfig.yml`, na sua raiz, contendo algumas configurações locais. Crie uma cópia do arquivo `appconfig.yml.example` e coloque as configurações do seu ambiente.

Exemplo de `appconfig.yml`:
``` yaml
server:
  port: 8080

db:
  host: '.\SQLEXPRESS'
  database: 'DIARIOBOT'
  driver: 'SQL Server Native Client 11.0'

crowdsourcer:
  tipos_publicacoes: ['TIPO-1', 'TIPO-2']
  classes_predictables: ['CLASSE-A', 'CLASSE-B']
```

### Execução
Para subir o servidor da API, basta executar o comando `start` do _npm_.
``` bash
npm start
```
Caso não ocorra nenhum erro, um servidor deve ser criado, usando a porta especificada no `appconfig.yml` (_e.g `http://localhost:8080/`_).
