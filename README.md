# Trybers And Dragons - Projeto em TypeScript

Este é um projeto de RPG (Role Playing Game) que aplica os princípios da arquitetura SOLID e conceitos de Orientação a Objetos utilizando TypeScript.

## Instalação

1. Clone este repositório.
2. Execute `npm install` para instalar as dependências.

## Como Usar

Para iniciar o projeto, execute:

npm start

<details>
  <summary><strong>🐋 Rodando no Docker vs Localmente</strong></summary><br />
  
  ## Com Docker

  > Rode o serviço `node` com o comando `docker-compose up -d`.
  - Esse serviço irá inicializar um container chamado `trybers_and_dragons`.
  - A partir daqui você pode rodar o container `trybers_and_dragons` via CLI ou abri-lo no VS Code.

  > Use o comando `docker exec -it trybers_and_dragons bash`.
  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > Instale as dependências [**Caso existam**] com `npm install`
  
  ⚠ Atenção ⚠ Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima. 


✨ **Dica:** A extensão `Remote - Containers` (que estará na seção de extensões recomendadas do VS Code) é indicada para que você possa desenvolver sua aplicação no container Docker direto no VS Code, como você faz com seus arquivos locais.


---
  
  ## Sem Docker
  
  > Instale as dependências [**Caso existam**] com `npm install`
  
  ✨ **Dica:** Para rodar o projeto desta forma, obrigatoriamente você deve ter o `node` instalado em seu computador.

  <br/>
</details>
## Tecnologias Utilizadas

- TypeScript
- Node.js
- Outras tecnologias utilizadas...

## Estrutura de Pastas e Arquivos

trybers-and-dragons/<br />
├── src/<br />
│ ├── classes/<br />
│ ├── interfaces/<br />
│ └── index.ts<br />
├── package.json<br />
├── tsconfig.json<br />
└── README.md<br />


## Funcionalidades e Recursos

- Criação de classes para personagens, monstros e desafios.
- Implementação de sistemas de batalha PVP e PVE.
- Interação entre diferentes tipos de personagens.