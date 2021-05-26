
const staff = require('../mock/staff_mock.json');


class staffController {
    getStaff(req,res) {
        res.json(staff);
    }
    
}

module.exports = new staffController();