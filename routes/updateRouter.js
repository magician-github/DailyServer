const express = require('express');
const updateRouter = express.Router();
const updateServices = require('../services/updateServices');
updateRouter.post('/updateWork', updateServices.updateWork);
updateRouter.post('/updateDaily', updateServices.updateDaily);
updateRouter.post('/updateMyInfo', updateServices.updateMyInfo);
updateRouter.post('/updateEveryDay', updateServices.updateEveryDay);


module.exports.updateRouter = updateRouter;