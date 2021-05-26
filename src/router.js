const Router = require('express');
const staffController = require('./controllers/staffController');
const technologiesController = require('./controllers/technologiesController');

const router = new Router();

router.get('/staff', staffController.getStaff);
router.post('/staff', staffController.createStaff);
router.put('/staff/:id', staffController.updateStaff);
router.delete('/staff/:id', staffController.deleteStaff);

router.get('/technologies', technologiesController.getTechnologies);
router.post('/technologies', technologiesController.createTechnologies);
router.put('/technologies/:id', technologiesController.updateTechnologies);
router.delete('/technologies/:id', technologiesController.deleteTechnologies);
module.exports = router;
