const Role = require('../helpers/role');

module.exports = [
    { id: 1, username: 'admin', password: 'admin', name: 'Admin', role: Role.Admin, email: 'admin@mail.com' },
    { id: 2, username: 'superuser', password: 'superpassword', name: 'Superman', role: Role.Superuser, email: 'superman@super.com' },
    { id: 3, username: 'recruiter1', password: '123', name: 'Juan', role: Role.Recruiter, email: 'juan@mail.com' },
    { id: 4, username: 'recruiter2', password: '123', name: 'Pedro', role: Role.Recruiter, email: 'pedro@mail.com' },
    { id: 5, username: 'recruiter3', password: '123', name: 'Juliana', role: Role.Recruiter, email: 'juliana@mail.com' }
];