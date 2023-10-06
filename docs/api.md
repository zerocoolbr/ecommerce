## Produtos

- Criar produtos
  - Verbo: POST
  - Path: /products
  - Parametros:
  - Queries:
  - Body:
    ```
    {
      title: string,
      description: string,
      price: number,
      image: string
    }
    ```
  - Response:
    - Code: 201
    - Content:

- Atualizar produtos
  - Verbo: PUT
  - Path: /products
  - Parametros: id do produto (number)
  - Queries:
  - Body:
    ```
    {
      title: string,
      description: string,
      price: number,
      image: string
    }
    ```
  - Response:
    - Code: 204
    - Content:

- Detalhes produtos
  - Verbo: GET
  - Path: /products
  - Parametros: id do do produto (number)
  - Queries:
  - Body:
  - Response:
    - Code: 200
    - Content:
    ```
    {
      id: number,
      title: string,
      description: string,
      price: number,
      image: string
    }
    ```

- Listagem de produtos
  - Verbo: GET
  - Path: /products
  - Parametros:
  - Queries:
    - minPrice, maxPrice
    - name
    - pagination
  - Response:
    - Code: 200
    - Content:
    ```
    {
      data: [{
        id: number,
        title: string,
        description: string,
        price: number,
        image: string
      }],
      page: number,
      nextPage: number,
      previousPage: number,
      hasNextPage: boolean,
      hasPreviousPage: boolean,
    }

 ## Usuários
    ```
- Criar usuários
  - Verbo: POST
  - Path: /users
  - Parâmetros:
  - Queries:
  - Body:
    ```
    {
      id: number
      first_name: text
      last_name: text
      email: text
      password: text
      cpf: text
      phone: text
      gender: text
      date_of_birth: text
    }
    ```
  - Response:
    - Code: 201
    - Content:

- Atualizar usuários
  - Verbo: PUT
  - Path: /users
  - Parâmetros: id do usuário (number)
  - Queries:
  - Body:
    ```
    {
      id: number
      first_name: text
      last_name: text
      email: text
      password: text
      cpf: text
      phone: text
      gender: text
      date_of_birth: text
    }
    ```
  - Response:
    - Code: 204
    - Content

- Acessar perfil do usuário
  - Verbo: GET
  - Path: /users
  - Parâmetros: id do usuário (number)
  - Queries:
  - Body:
  - Response:
    - Code: 200
    - Content:
      ```
      {
        id: number
        first_name: text
        last_name: text
        email: text
        password: text
        cpf: text
        phone: text
        gender: text
        date_of_birth: text
      }
      ```
