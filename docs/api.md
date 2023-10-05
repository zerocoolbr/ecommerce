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
    ```
