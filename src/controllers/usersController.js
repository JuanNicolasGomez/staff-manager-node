const userService = require('../services/usersService');
const Role = require('../helpers/role');


class usersController {
    authenticate(req, res, next) {
        userService.authenticate(req.body)
            .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
            .catch(err => next(err));
    }

    getAll(req, res, next) {
        userService.getAll()
            .then(users => res.json(users))
            .catch(err => next(err));
    }

    getById(req, res, next) {
        const currentUser = req.user;
        const id = parseInt(req.params.id);

        if (id !== currentUser.sub) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        userService.getById(req.params.id)
            .then(user => user ? res.json(user) : res.sendStatus(404))
            .catch(err => next(err));
    }

    getByRole(req, res, next) {

    }

    updateUser(req, res, next) {
        const id = parseInt(req.params.id);
        const newUser = req.body;

        userService.updateUserById(id, newUser)
            .then(user => user ? res.json(user) : res.sendStatus(404))
            .catch(err => next(err));
            
    }
}

module.exports = new usersController();