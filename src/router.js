const Router = require('express');
const jwt = require("jsonwebtoken");
const staffController = require('./controllers/staffController');
const technologiesController = require('./controllers/technologiesController');


const router = new Router();

router.use(setUser);

router.post('/login', (req , res) => {
    const user = req.body.user;
    jwt.sign({user}, 'secretkey', {expiresIn: '1h'}, (err, token) => {
        res.json({
            token
        });
    });
});

router.get('/staff', verifyToken, staffController.getStaff);
router.post('/staff', verifyToken, staffController.createStaff);
router.put('/staff/:id', verifyToken, staffController.updateStaff);
router.delete('/staff/:id', verifyToken, staffController.deleteStaff);

router.get('/technologies', verifyToken, technologiesController.getTechnologies);
router.post('/technologies', verifyToken, technologiesController.createTechnologies);
router.put('/technologies/:id', verifyToken, technologiesController.updateTechnologies);
router.delete('/technologies/:id', verifyToken, technologiesController.deleteTechnologies);

function verifyToken(req, res, next){
    const bearerHeader =  req.headers['authorization'];

    if(typeof bearerHeader !== 'undefined'){
        const bearerToken = bearerHeader.split(" ")[1];
        req.token  = bearerToken;
        jwt.verify(req.token, 'secretkey', (error, authData) => {
            if(error){
                res.sendStatus(403);
            }
        });
        next();
    }else{
        res.sendStatus(403);
    }
}

function setUser(req, res, next) {
    const userId = req.body.userId
    if (userId) {
      req.user = users.find(user => user.id === userId)
    }
    next()
  }

module.exports = router;
