# staff-manager-node

## Getting Started
1. Clonar el repositorio
2. Comandos para ejecutar 

  `npm i`
  
  `npm run dev`
  
 El servicio queda corriendo en el puerto 3000
 
## Endpoints
### users CRUD
**POST /api/users/authenticate**
Devuelve información del usuario junto con token de autenticaión

Body:

`{
    "username": "admin",
    "password": "admin"
}`

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

### staff CRUD

**POST /api/staff**
Devuelve información del usuario junto con token de autenticaión

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
Devuelve información de usuarios

**DELETE /api/staff/:id**
Elimina información de usuario por id

**PUT /api/staff/:id**
Actualiza informacion de usuario

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

### technologies CRUD


# Arquitectura

Se usa un servicio de cache con Redis para mejorar el performance, guardando como llave valor el id del item y el precio.

![alt text](https://github.com/JuanNicolasGomez/coupons-challenge/blob/master/architecture_diagram.jpg)



