const staff = require('../dataMock/staff_mock.json');
const status = require('../helpers/status.js');
const emailSevice = require('./emailServiceMock');

module.exports = {
    createStaff,
    deleteStaff,
    updateStaffById,
    getAll,
    changeStaffStatus
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

async function changeStaffStatus(id, newStatus) {
    const updatedStaff = staff.find(s => s.id === parseInt(id));
    if (newStatus === status.HIRED){
        await hireStaff(updatedStaff);
    } else if (newStatus === status.DECLINED) {
        await declineStaff(updatedStaff);
    } else if (newStatus === status.ONHOLD) {
        await onHoldStaff(updatedStaff);
    }

    return updatedStaff;
}

async function hireStaff(staff) {
    staff.hiringStatus = status.HIRED;
    staff.recruitingStatus = status.COMPLETED;
    staff.staffStatus = status.ACTIVE;
    staff.statusDate = new Date();
    emailSevice.sendEmail({
        title: 'You were hired', 
        to: staff.email, 
        content: `Hi ${staff.name} you have been hired! and we are happy to introduce you to the team.`
    });
}

async function declineStaff(staff) {
    staff.hiringStatus = status.DECLINED;
    staff.recruitingStatus = status.COMPLETED;
    staff.staffStatus = status.NULL;
    staff.statusDate = new Date();
    emailSevice.sendEmail({
        title: 'Thanks for applying', 
        to: staff.email, 
        content: `Hi ${staff.name} thank you for applying to the position, unfortunetly we will not continue with your process, but you can still apply later.`
    });
}

async function onHoldStaff(staff) {
    staff.hiringStatus = status.ONHOLD;
    staff.recruitingStatus = status.COMPLETED;
    staff.staffStatus = status.NULL;
    staff.statusDate = new Date();
    emailSevice.sendEmail({
        title: 'Thanks for applying', 
        to: staff.email, 
        content: `Hi ${staff.name} thank you for applying to the position, we are considering your application for future vacancies.`
    });
}