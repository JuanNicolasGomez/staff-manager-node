const staffService = require('../services/staffService');

class staffController {
    getStaff(req,res, next) {
        staffService.getAll()
            .then(staff => res.json(staff))
            .catch(err => next(err));
    }

    createStaff(req,res, next) {
        staffService.createStaff(req.body)
            .then(staff => res.json(staff))
            .catch(err => next(err));
    }

    deleteStaff(req,res, next) {
        const {id} = req.params;
        staffService.deleteStaff(id)
            .then(staff => staff ? res.json(staff) : res.sendStatus(404))
            .catch(err => next(err));
    }

    updateStaff(req,res, next) {
        const {id} = req.params;
        const newStaff = req.body;
        staffService.updateStaffById(id, newStaff)
            .then(staff => staff ? res.json(staff) : res.sendStatus(404))
            .catch(err => next(err));
    }
    
}

module.exports = new staffController();