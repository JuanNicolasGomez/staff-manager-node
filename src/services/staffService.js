const staff = require('../mock/staff_mock.json');
const status = require('../helpers/status.js');

module.exports = {
    createStaff,
    deleteStaff,
    updateStaffById,
    getAll
};

async function getAll() {
    return staff;
}

async function createStaff(newStaff) {
    newStaff.status = status.PENDING;
    staff.push(newStaff);
    return staff;
}

async function deleteStaff(id) {
    let removed = null;
    for (let i = 0; i < staff.length; i++) {
        if (staff[i].id == id){
            removed = staff.splice(i,1);
        }
    }

    return removed;
}

async function updateStaffById(id, newStaff) {
    let updatedStaff = null;
    for (let i = 0; i < staff.length; i++) {
        if (staff[i].id == id){
            staff[i] = newStaff;
            updatedStaff = newStaff;
        }
    }

    return updatedStaff;
}