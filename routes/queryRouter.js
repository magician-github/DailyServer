const express = require('express');
const queryRouter = express.Router();
const queryServices = require('../services/queryServices');
queryRouter.get('/queryEveryDay', queryServices.queryEveryDay);
queryRouter.get('/queryWork', queryServices.queryWork);
queryRouter.get('/queryMyInfo', queryServices.queryMyInfo);
queryRouter.get('/queryDailyById', queryServices.queryDailyById);
queryRouter.get('/queryDaily', queryServices.queryDaily);
queryRouter.get('/queryDailyCount', queryServices.queryDailyCount);
queryRouter.get('/queryUsers', queryServices.queryUsers);





module.exports.queryRouter = queryRouter;