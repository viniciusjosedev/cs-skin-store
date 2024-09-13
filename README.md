# CS SKIN STORE

![image](https://github.com/user-attachments/assets/be222eff-9e14-40fb-9c76-7e817525e216)

Este projeto é um monolito para uma aplicação full-stack que representa uma página de compras de skins de CS (Counter-Strike). Foi feito o deploy em uma instância da AWS para acesso rápido, está disponível em [https://cs-skins-store.vinicorp.online/store](https://cs-skins-store.vinicorp.online/store).

## Destaques e decisões técnicas

- **Nest.js** com uso de **Prisma** ao lado de um banco de dados não relacional (**MongoDB**). O MongoDB utilizado é a versão LTS para maior estabilidade.
- Testes de integração juntamente com documentação de rotas utilizando o **Swagger**.
- Página web feita com o uso do **Next.js** versão 14, utilizando a biblioteca de estilos pré-prontos **ChakraUI** e com a utilização de componentes tanto client-side quanto server-side.
- Todos os serviços (Frontend, Backend e Banco de Dados) estão dockerizados.

## Primeiros passos

Para rodar o projeto, siga estes passos:

### Docker

Para iniciar a aplicação com Docker, certifique-se de que o Docker está instalado juntamente com o Docker Compose.

1. **Clone o repositório:**

    ```sh
    git clone git@github.com:viniciusjosedev/cs-skin-store.git
    cd cs-skin-store
    ```

2. **Configure suas credenciais:**

    Crie um arquivo `.env` em `/backend` com o seguinte conteúdo para o backend (abaixo é apenas um exemplo, fique à vontade para mudar suas portas):

    ```sh
    # ENVIRONMENT, DEV OR PROD
    NODE_ENV=dev
    NODE_PORT=1010

    # DB CONFIG
    MONGO_PORT=27017
    DATABASE_URL="mongodb://cs-skin-store-mongo:27017/skinStore?replicaSet=rs0&retryWrites=true&w=majority&directConnection=true"

    # FRONTEND CONFIG
    FRONTEND_URL=http://localhost:3000
    ```

    E para o frontend, crie um arquivo `.env` dentro de `/frontend` (abaixo é apenas um exemplo, fique à vontade para mudar suas portas):

    **OBS:** A porta da URL do backend deve ser a mesma que está configurada na `.env` do `/backend`.

    ```sh
    NODE_ENV=dev

    NEXT_PORT=3000

    NEXT_PUBLIC_BACKEND_URL=http://localhost:1010
    ```

3. Com as credenciais feitas, inicie o Docker em ambos os diretórios.

    Em um terminal, execute:
    ```sh
    cd frontend
    npm run up
    ```
    Em outro terminal, execute:
    ```sh
    cd backend
    npm run up
    ```

4. Caso inicie o backend como desenvolvimento (`NODE_ENV=dev`), é necessário rodar os seeds com o Prisma. Para isso, entre no container do backend e rode o comando:

    ```sh
    docker exec -it cs-skin-store-app sh
    npm run prisma:seed
    ```

## Execução dos Testes

Para executar os testes de integração, siga estes passos:

1. Verifique as variáveis de ambiente para testes (`.env.example`) no diretório `/backend`.

    ```sh
    DATABASE_URL=
    ```

    É necessário que a URL seja a mesma que a URL de produção, mudando apenas o nome do banco de dados.

    Se a URL na `.env` for:

    ```sh
    DATABASE_URL="mongodb://cs-skin-store-mongo:27017/skinStore?replicaSet=rs0&retryWrites=true&w=majority&directConnection=true"
    ```

    Então a URL na `.env.test` deverá apenas mudar o nome do banco, exemplo:

    ```sh
    DATABASE_URL="mongodb://cs-skin-store-mongo:27017/skinStoreTest?replicaSet=rs0&retryWrites=true&w=majority&directConnection=true"
    ```

2. **Entre no container do backend:**

    ```sh
    docker exec -it cs-skin-store-app sh
    ```

3. **Execute os testes:**

    ```sh
    npm run test
    ```

Certifique-se de que o container do backend está rodando corretamente antes de executar os testes.
