const Router = require('express');
const staffController = require('./controllers/staffController');
const technologiesController = require('./controllers/technologiesController');
const usersController = require('./controllers/usersController');
const authorize = require('./helpers/authorize');
const Role = require('./helpers/role');

const router = new Router();

router.post('/users/authenticate', usersController.authenticate);
router.get('/users/', authorize(Role.Admin), usersController.getAll);
router.get('/users/:id', authorize(), usersController.getById);

router.get('/staff', staffController.getStaff);
router.post('/staff', staffController.createStaff);
router.put('/staff/:id', staffController.updateStaff);
router.delete('/staff/:id', staffController.deleteStaff);

router.get('/technologies', technologiesController.getTechnologies);
router.post('/technologies', technologiesController.createTechnologies);
router.put('/technologies/:id', technologiesController.updateTechnologies);
router.delete('/technologies/:id', technologiesController.deleteTechnologies);

module.exports = router;
