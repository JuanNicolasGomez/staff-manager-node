const Router = require('express');
const staffController = require('./controllers/staffController');

const router = new Router();

router.get('/staff', staffController.getStaff);
router.post('/staff', staffController.createStaff);
router.put('/staff/:id', staffController.updateStaff);
router.delete('/staff/:id', staffController.deleteStaff);
module.exports = router;
