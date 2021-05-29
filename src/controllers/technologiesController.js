
const technologies = require('../dataMock/technologies_mock.json');


class technologiesController {
    getTechnologies(req,res) {
        res.json(technologies);
    }

    createTechnologies(req,res) {
        technologies.push(req.body);
        res.json({
            "status": "ok"
        });
    }

    deleteTechnologies(req,res) {
        const {id} = req.params;
        let status = `no item found with id ${id}`;
        for (let i = 0; i < technologies.length; i++) {
            if (technologies[i].id == id){
                technologies.splice(i,1);
                status = "ok";
            }
        }
        res.json({
            status
        });
    }

    updateTechnologies(req,res) {
        const {id} = req.params;
        const item = req.body;
        let status = `no item found with id ${id}`;
        for (let i = 0; i < technologies.length; i++) {
            if (technologies[i].id == id){
                console.log(item)
                technologies[i] = item;
                status = "ok";
            }
        }
        res.json({
            status
        });
    }
    
}

module.exports = new technologiesController();