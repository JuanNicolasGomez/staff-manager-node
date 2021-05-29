module.exports = {
    sendEmail
};

async function sendEmail({title, to, content}) {
    if (!title || !to || !content) {
        console.log(`Bad params for email`);
        return;
    }
    console.log(`Mock email sent Succesfully: ${title, to, content}`);
}