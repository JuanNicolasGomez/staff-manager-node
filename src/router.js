const Router = require('express');
const staffController = require('./controllers/staffController');
const technologiesController = require('./controllers/technologiesController');
const vacanciesController = require('./controllers/vacanciesController');
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
router.patch('/staff/:id', authorize([Role.Superuser, Role.Admin]), staffController.updateStaffStatus);
router.delete('/staff/:id', authorize([Role.Superuser, Role.Admin]), staffController.deleteStaff);

router.get('/technologies', authorize([Role.Superuser, Role.Admin]), technologiesController.getTechnologies);
router.post('/technologies', authorize([Role.Superuser, Role.Admin]), technologiesController.createTechnologies);
router.put('/technologies/:id', authorize([Role.Superuser, Role.Admin]), technologiesController.updateTechnologies);
router.delete('/technologies/:id', authorize([Role.Superuser, Role.Admin]), technologiesController.deleteTechnologies);

router.get('/vacancies', authorize([Role.Superuser, Role.Admin]), vacanciesController.getVacancies);
router.post('/vacancies', authorize([Role.Superuser, Role.Admin]), vacanciesController.createVacancy);
router.put('/vacancies/:id', authorize([Role.Superuser, Role.Admin]), vacanciesController.updateVacancy);
router.delete('/vacancies/:id', authorize([Role.Superuser, Role.Admin]), vacanciesController.deleteVacancy);

module.exports = router;
