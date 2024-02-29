const express = require('express');
const classicsRouter = express.Router();
const {createClassic} = require('../controllers/classics.controller')

classicsRouter.get('/', (req, res, next)=>{
    res.status(200).json({
        status: 200,
        message:'get classics',
        app: 'my app'
    })
});
classicsRouter.post('/', createClassic);

module.exports = classicsRouter;