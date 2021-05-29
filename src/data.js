const ROLE = {
    SUPERUSER: 'superuser',
    ADMIN: 'admin',
    RECRUITER: 'recruiuter'
}

module.exports = {
    ROLE,
    users: [
        { id: 1, name: 'juan', role: ROLE.ADMIN},
    ]
}