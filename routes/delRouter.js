const express = require('express');
const delRouter = express.Router();
const delServices = require('../services/delServices')
delRouter.get('/delWork', delServices.delWork);
delRouter.get('/delDaily', delServices.delDaily);
delRouter.get('/delEveryDay', delServices.delEveryDay);


module.exports.delRouter = delRouter;