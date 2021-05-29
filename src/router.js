const Router = require('express');
const staffController = require('./controllers/staffController');
const technologiesController = require('./controllers/technologiesController');
const usersController = require('./controllers/usersController');
const authorize = require('./helpers/authorize');
const Role = require('./helpers/role');

const router = new Router();

router.post('/users/authenticate', usersController.authenticate);
router.get('/users/', authorize([Role.Superuser]), usersController.getAll);
router.get('/users/:id', authorize([Role.Superuser]), usersController.getById);
router.put('/users/modify/:id', authorize([Role.Superuser]), usersController.updateUser);

router.get('/staff', authorize(), staffController.getStaff);
router.post('/staff', authorize(), staffController.createStaff);
router.put('/staff/:id', authorize([Role.Superuser, Role.Admin]), staffController.updateStaff);
router.delete('/staff/:id', authorize([Role.Superuser, Role.Admin]), staffController.deleteStaff);

router.get('/technologies', authorize([Role.Superuser, Role.Admin]), technologiesController.getTechnologies);
router.post('/technologies', authorize([Role.Superuser, Role.Admin]), technologiesController.createTechnologies);
router.put('/technologies/:id', authorize([Role.Superuser, Role.Admin]), technologiesController.updateTechnologies);
router.delete('/technologies/:id', authorize([Role.Superuser, Role.Admin]), technologiesController.deleteTechnologies);

module.exports = router;
