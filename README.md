# CS SKIN STORE

Este projeto é um monolito para uma aplicação full-stack na qual se consiste em representar uma pagina de compras de skins de CS (Counter-Strike).

## Destaques

- Nest.js com uso de prisma ao lado de um banco de dados não relacional (MongoDB).
- Testes de integração juntamente com documentação de rotas utilizando o Swagger.
- Página web feita com o uso do Next.js utilizando a lib de estilos pré-prontos ChakraUI.
- Todos os serviços (Frontend, Backend e Banco de dados) estão Dockerizados.

## Getting Started

To run this project, follow these steps:

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/your-repository.git
    cd your-repository
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

3. Setup Prisma:

    ```sh
    npx prisma migrate dev --name init
    npx prisma generate
    ```

4. Run the application:

    ```sh
    npm run start:dev
    ```

Then, you will have a NestJS application running with pagination logic.

## Example Usage

To fetch paginated data, you can make a request to the `/items` endpoint:


This will fetch the first page of items with a size of 10 per page. The response will include a flag indicating if more items are available beyond the current page.

## Key Files and Structure

- **`items.controller.ts`**: Handles incoming HTTP requests and calls the appropriate service methods.
- **`items.service.ts`**: Contains the business logic for fetching paginated data and checking for more items.
- **`prisma.service.ts`**: Provides a Prisma client instance for interacting with the database.
- **`dto/query.dto.ts`**: Defines the Data Transfer Object for validating query parameters.

## Useful Commands

```sh
# To run in dev mode
npm run start:dev

# To format the code
npm run format

# To run lint checks
npm run lint

# To build the project
npm run build
