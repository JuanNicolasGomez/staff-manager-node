const vacancies = require('../dataMock/vacancies_mock.json');
const staffService = require('../services/staffService');

module.exports = {
    createVacancy,
    deleteVacancy,
    updateVacancyById,
    getAll,
};

async function getAll() {
    return vacancies;
}

async function createVacancy(newVacancy) {
    vacancies.push(newVacancy);
    await staffService.createVacancyCampaignsForStaff(newVacancy);
    return newVacancy;
}

async function deleteVacancy(id) {
    let removed = null;
    for (let i = 0; i < vacancies.length; i++) {
        if (vacancies[i].id == id){
            removed = vacancies.splice(i,1);
        }
    }

    return removed;
}

async function updateVacancyById(id, newVacancy) {
    let updatedVacancy = null;
    for (let i = 0; i < vacancies.length; i++) {
        if (vacancies[i].id == id){
            vacancies[i] = newVacancy;
            updatedVacancy = newVacancy;
        }
    }

    return updatedVacancy;
}
