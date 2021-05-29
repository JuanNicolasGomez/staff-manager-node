module.exports = {
    sendEmail
};

async function sendEmail({title, to, content}) {
    console.log(`Mock email sent Succesfully: ${title, to, content}`);
}