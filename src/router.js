const Router = require('express');
const staffController = require('./controllers/staffController');

const router = new Router();

router.get('/staff', staffController.getStaff);

module.exports = router;
