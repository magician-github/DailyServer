const express = require('express');
const writeRouter = express.Router();
const writeServices = require('../services/writeServices');
writeRouter.post('/writeEveryDay', writeServices.writeEveryDay);
writeRouter.post('/writeDaily', writeServices.writeDaily);
writeRouter.post('/writeWork', writeServices.writeWork);
writeRouter.post('/writeMyInfo', writeServices.writeMyInfo);




module.exports.writeRouter = writeRouter;