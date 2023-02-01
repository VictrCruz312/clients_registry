# clients_registry
A API Clients Registry é uma ferramenta de cadastro de clientes, onde cada
cliente pode ter vários contatos associados. Ela permite que você registre
informações básicas sobre seus clientes, incluindo nome completo, email,
telefone e data de registro. Além disso, é possível cadastrar informações
sobre os contatos de cada cliente, incluindo nome completo, email, telefone
e data de registro. A API oferece as operações básicas de CRUD para clientes e
contatos, além de permitir gerar relatórios em tela ou em PDF. Com essa API,
você terá uma solução completa e eficiente para gerenciar seus clientes e seus contatos.

## Características
- Fácil de configurar e executar
- Utiliza Docker para garantir compatibilidade com ambientes Unix
- Ferramenta útil para organizações financeiras e outras empresas que lidam com muitos dados CNAB, permitindo automatizar processos de negócios.

## Requisitos
- Docker
- Docker Compose

## Instalação
1. Clone este repositório: `git clone https://github.com/VictrCruz312/clients_registry.git`
2. Entre no diretório do projeto: `cd clients_registry`
3. Crie um arquivo `.env` com as configurações de sua aplicação (veja o arquivo `.env.example` como referência)
4. Execute o comando `docker-compose up` para iniciar os containers. você pode usar a tag `-d` no final do comando para não travar o terminal nos logs do container
5. Acesse a aplicação em `http://localhost:3000`

Para conferir as rotas da aplicação abra o programa insomnia e carregue as rotas do arquivo `insomnia-clients_registry.json` que está na raiz do projeto dentro do insomnia

## Créditos
clients_registry foi desenvolvido por [VictrCruz312](https://github.com/VictrCruz312) com o objetivo de criar uma solução
completa e eficiente para salvar e gerenciar seus clientes e seus contatos..
