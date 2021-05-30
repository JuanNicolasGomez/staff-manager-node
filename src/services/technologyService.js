const technologies = require('../dataMock/technologies_mock.json');

module.exports = {
    createTechnology,
    deleteTechnology,
    updateTechnologyById,
    getAll,
};

async function getAll() {
    return technologies;
}

async function createTechnology(newTechnology) {
    technologies.push(newTechnology);
    return newTechnology;
}

async function deleteTechnology(id) {
    let removed = null;
    for (let i = 0; i < technologies.length; i++) {
        if (technologies[i].id == id){
            removed = technologies.splice(i,1);
        }
    }

    return removed;
}

async function updateTechnologyById(id, newTechnology) {
    let updatedTechnology = null;
    for (let i = 0; i < technologies.length; i++) {
        if (technologies[i].id == id){
            technologies[i] = newTechnology;
            updatedTechnology = newTechnology;
        }
    }

    return updatedTechnology;
}
