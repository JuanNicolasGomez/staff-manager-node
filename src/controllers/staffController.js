
const staff = require('../mock/staff_mock.json');


class staffController {
    getStaff(req,res) {
        res.json(staff);
    }

    createStaff(req,res) {
        staff.push(req.body);
        res.json({
            "status": "ok"
        });
    }

    deleteStaff(req,res) {
        const {id} = req.params;
        let status = `no item found with id ${id}`;
        for (let i = 0; i < staff.length; i++) {
            if (staff[i].id == id){
                staff.splice(i,1);
                status = "ok";
            }
        }
        res.json({
            status
        });
    }

    updateStaff(req,res) {
        const {id} = req.params;
        const item = req.body;
        let status = `no item found with id ${id}`;
        for (let i = 0; i < staff.length; i++) {
            if (staff[i].id == id){
                console.log(item)
                staff[i] = item;
                status = "ok";
            }
        }
        res.json({
            status
        });
    }
    
}

module.exports = new staffController();