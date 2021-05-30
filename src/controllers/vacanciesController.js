const vacancyService = require('../services/vacanciesService');


class vacanciesController {
    getVacancies(req,res, next) {
        vacancyService.getAll()
            .then(vacancy => res.json(vacancy))
            .catch(err => next(err));
    }

    createVacancy(req,res, next) {
        vacancyService.createVacancy(req.body)
            .then(vacancy => res.json(vacancy))
            .catch(err => next(err));
    }

    deleteVacancy(req,res, next) {
        const {id} = req.params;
        vacancyService.deleteVacancy(id)
            .then(vacancy => vacancy ? res.json(vacancy) : res.sendStatus(404))
            .catch(err => next(err));
    }

    updateVacancy(req,res, next) {
        const {id} = req.params;
        const newVacancy = req.body;
        vacancyService.updateVacancyById(id, newVacancy)
            .then(vacancy => vacancy ? res.json(vacancy) : res.sendStatus(404))
            .catch(err => next(err));
    }
}

module.exports = new vacanciesController();