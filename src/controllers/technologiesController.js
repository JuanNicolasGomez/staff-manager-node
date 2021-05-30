
const technologies = require('../dataMock/technologies_mock.json');
const technologyService = require('../services/technologyService');

class technologiesController {
    getTechnologies(req,res, next) {
        technologyService.getAll()
            .then(technology => res.json(technology))
            .catch(err => next(err));
    }

    createTechnology(req,res, next) {
        technologyService.createTechnology(req.body)
            .then(technology => res.json(technology))
            .catch(err => next(err));
    }

    deleteTechnology(req,res, next) {
        const {id} = req.params;
        technologyService.deleteTechnology(id)
            .then(technology => technology ? res.json(technology) : res.sendStatus(404))
            .catch(err => next(err));
    }

    updateTechnology(req,res, next) {
        const {id} = req.params;
        const newTechnology = req.body;
        technologyService.updateTechnologyById(id, newTechnology)
            .then(technology => technology ? res.json(technology) : res.sendStatus(404))
            .catch(err => next(err));
    }
    
}

module.exports = new technologiesController();