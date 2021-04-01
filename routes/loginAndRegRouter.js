const express = require('express');
const loginAndServices = require('../services/loginAndRegServices');
const loginAndRegRouter = express.Router();
loginAndRegRouter.post('/login', loginAndServices.login);
loginAndRegRouter.post('/reg', loginAndServices.reg);
module.exports.loginAndRegRouter = loginAndRegRouter;