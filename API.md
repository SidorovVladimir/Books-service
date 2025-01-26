# API

#### BASE URL

```
http://localhost:5000/api
```

<hr/>

### Endpoints Overview

#### 1. Create author

##### Method: POST

##### Endpoint: /authors

##### Body Parameters:

- `firstName`
- `lastName`

###### Example:

```json
{
  "firstname": "string",
  "lastName": "string"
}
```

##### Response

```json
{
  "firstName": "example",
  "lastName": "example",
  "author_id": 10,
  "created_at": "2025-01-26T11:01:59.165Z",
  "updated_at": "2025-01-26T11:01:59.165Z"
}
```

<hr/>

#### 2. Update author

##### Method: PATCH

##### Endpoint: /authors/:id

##### Param:

- `id` - the identification number of the author

##### Body Parameters:

- `firstName` (optional)
- `lastName` (optionsl)

###### Example:

```json
{
  "firstName": "string",
  "lastName": "string"
}
```

##### Response

```json
{
  "firstName": "example",
  "lastName": "example",
  "author_id": 10,
  "created_at": "2025-01-26T11:01:59.165Z",
  "updated_at": "2025-01-26T11:01:59.165Z"
}
```

<hr/>

#### 3. Getting a list of authors

##### Method: GET

##### Endpoint: /authors

##### Response

```json
[
  {
    "author_id": 9,
    "firstName": "Ivan",
    "lastName": "Ivanov",
    "created_at": "2025-01-26T09:01:09.433Z",
    "updated_at": "2025-01-26T09:01:09.433Z",
    "books": [
      {
        "book_id": 7,
        "title": "example",
        "author_id": 9,
        "created_at": "2025-01-26T09:01:23.160Z",
        "updated_at": "2025-01-26T09:01:23.160Z"
      }
    ]
  }
]
```

<hr/>

#### 4. Getting one authors

##### Method: GET

##### Endpoint: /authors/:id

##### Param:

- `id` - the identification number of the author

##### Response

```json
{
  "author_id": 9,
  "firstName": "Ivan",
  "lastName": "Ivanov",
  "created_at": "2025-01-26T09:01:09.433Z",
  "updated_at": "2025-01-26T09:01:09.433Z"
}
```

<hr/>

#### 5. Deleting a author

##### Method: DELETE

##### Endpoint: /author/:id

##### Param:

- `id` - the identification number of the author

##### Response

```
true
```

<hr/>

#### 6. Create book

##### Method: POST

##### Endpoint: /books

##### Body Parameters:

- `title`
- `author_id`

###### Example:

```json
{
  "title": "string",
  "author_id": "number"
}
```

##### Response

```json
{
  "author_id": 10,
  "title": "example",
  "book_id": 9,
  "created_at": "2025-01-26T11:15:15.493Z",
  "updated_at": "2025-01-26T11:15:15.493Z"
}
```

<hr/>

#### 7. Update book

##### Method: PATCH

##### Endpoint: /books/:id

##### Param:

- `id` - the identification number of the book

##### Body Parameters:

- `title` (optional)
- `author_id` (optionsl)

###### Example:

```json
{
  "title": "string",
  "author_id": "number"
}
```

##### Response

```json
{
  "author_id": 10,
  "title": "example",
  "book_id": 9,
  "created_at": "2025-01-26T11:15:15.493Z",
  "updated_at": "2025-01-26T11:15:15.493Z"
}
```

<hr/>

#### 8. Getting a list of books

##### Method: GET

##### Endpoint: /books

##### Response

```json
[
  {
    "book_id": 7,
    "title": "example",
    "author_id": 9,
    "created_at": "2025-01-26T09:01:23.160Z",
    "updated_at": "2025-01-26T09:01:23.160Z",
    "author": {
      "author_id": 9,
      "firstName": "Ivan",
      "lastName": "Ivanov",
      "created_at": "2025-01-26T09:01:09.433Z",
      "updated_at": "2025-01-26T09:01:09.433Z"
    }
  },
  {
    "book_id": 9,
    "title": "example2",
    "author_id": 10,
    "created_at": "2025-01-26T11:15:15.493Z",
    "updated_at": "2025-01-26T11:15:15.493Z",
    "author": {
      "author_id": 10,
      "firstName": "Vladimir",
      "lastName": "Sidorov",
      "created_at": "2025-01-26T11:01:59.165Z",
      "updated_at": "2025-01-26T11:01:59.165Z"
    }
  }
]
```

<hr/>

#### 9. Getting one book

##### Method: GET

##### Endpoint: /books/:id

##### Param:

- `id` - the identification number of the book

##### Response

```json
{
  "book_id": 9,
  "title": "example2",
  "author_id": 10,
  "created_at": "2025-01-26T11:15:15.493Z",
  "updated_at": "2025-01-26T11:15:15.493Z"
}
```

<hr/>

#### 10. Deleting a book

##### Method: DELETE

##### Endpoint: /book/:id

##### Param:

- `id` - the identification number of the book

##### Response

```
true
```

<hr/>
