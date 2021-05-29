const staff = require('../dataMock/staff_mock.json');
const status = require('../helpers/status.js');
const emailSevice = require('./emailServiceMock');

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
    newStaff.recruitingStatus = status.PENDING;
    staff.push(newStaff);
    emailSevice.sendEmail({
        title: 'New Staff notification', 
        to: 'admin@mail.com', 
        content: `A new staff: ${newStaff.name} has been created please check the platform.`
    });
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