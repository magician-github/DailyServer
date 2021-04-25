const express = require('express');
const updateRouter = express.Router();
const updateServices = require('../services/updateServices');
updateRouter.post('/updateWork', updateServices.updateWork);
updateRouter.post('/updateDaily', updateServices.updateDaily);
updateRouter.post('/updateMyInfo', updateServices.updateMyInfo);
updateRouter.post('/updateEveryDay', updateServices.updateEveryDay);
updateRouter.post('/updatePwd', updateServices.updatePwd);



module.exports.updateRouter = updateRouter;