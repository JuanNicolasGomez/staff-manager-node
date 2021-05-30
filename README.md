# staff-manager-node

## Getting Started
1. Clonar el repositorio
2. Comandos para ejecutar 

  `npm i`
  
  `npm run dev`
  
 El servicio queda corriendo en el puerto 3000

## Autenticación
Se utilizó JWT para autenticación de usuarios y roles

## Autorización
Todos los endpoints excepto el de **/api/users/authenticate** requeren el siguiente header de autorizacón:

**Authorization:**  Bearer **{{** token jwt que devuelve el endpoint de authenticate **}}**


## Endpoints
### USERS CRUD
**POST /api/users/authenticate**
Devuelve información del usuario junto con token de autenticaión

Body:

`{
    "username": "admin",
    "password": "admin"
}`

Response:
`{
    "id": 1,
    "username": "admin",
    "name": "Admin",
    "role": "Admin",
    "email": "admin@mail.com",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJBZG1pbiIsImlhdCI6MTYyMjMzNzkwMSwiZXhwIjoxNjIyMzQxNTAxfQ.x16onuKec_83uuKw72uJBve4WW-1cH8W1WW3TQBA8Bc"
}
`

**GET /api/users/**
Devuelve información de usuarios

**GET /api/users/:id**
Devuelve información de usuarios por id

**PUT /api/users/modify/:id**
Actualiza informacion de usuario

Body:

`{
    "id": 2,
    "username": "recruiter",
    "name": "Juancho",
    "role": "Recruiter",
    "email": "juancho@mail.com"
}`

### STAFF CRUD

**POST /api/staff**

Body:

`{
    "id": 3,
    "name": "juan",
    "email": "juan2@mail.com",
    "socialSecurityNumbre": 123456,
    "technologies": [
        {
            "name": "NodeJs",
            "experience": 12
        }
    ]
}`

**GET /api/staff**

**DELETE /api/staff/:id**

**PUT /api/staff/:id**

Body:

`{
    "id": 2,
    "name": "jua2",
    "email": "juan2@mail.com",
    "socialSecurityNumbre": 123456,
    "technologies": [
        {
            "name": "nodejs",
            "experience": 1
        }
    ]
}`

### TECHNOLOGIES CRUD

**POST /api/technologies**

Body:

`{
    "id": 2,
    "name": "Java",
    "description": "Java programming language"
}`

**GET /api/technologies**

**DELETE /api/technologies/:id**

**PUT /api/technologies/:id**

Body:

`{
    "id": 3,
    "name": "SQL",
    "description": "SQL techonlogy for database"
}`

### VACANCIES CRUD

**POST /api/vacancies**

Body:

`{
    "id": 6,
    "technology": "NodeJs",
    "experience": 9
}`

**GET /api/vacancies**

**DELETE /api/vacancies/:id**

**PUT /api/vacancies/:id**

Body:

`{
    "id": 3,
    "technology": "Javascript",
    "experience": 9
}`


# Architecture and folder structure

**helpers**
- authorize.js
- errorHandler.js
- role.js
- status.js

**Services**
- emailServiceMock
- staffService
- technologyService
- usersSevice
- vacanciesService

**controllers**
- staffController
- technologiesController
- usersController
- vacanciesController

**dataMock**
- staff_mock
- technologies_mock
- users_mock
- vacancies_mock

![alt text](https://github.com/JuanNicolasGomez/staff-manager-node/blob/main/architecture.jpg)



