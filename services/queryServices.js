const resHelper = require("../utils").resHelper;
const queryDao = require("../dao/queryDao");
const isLogin = require('../utils/index').isLogin;
const curUser = require('../global');
const url = require('url');
const pleaseLogin = require('../utils/index').pleaseLogin;
function queryDailyById(req, res, next) {
  const id = req.query.id;
  queryDao.IqueryDailyById({
    id:id,
    callback:(err,resp)=>{
      if(!err){
        res.status(200);
        res.write(resHelper(200, "success", resp));
        res.end()
      } else {
        res.status(500);
        res.write(resHelper(500, "fail", resp));
        res.end()
      }
    
    }
  })
}
function queryDaily(req, res, next) {
  // const {pagination} = url.parse(req.url,true).query || 1;
  const pagination = req.query.pagination;
  // console.log(req.query,'req')
  queryDao.IqueryDaily({
    id:req.id,
    pagination:pagination,
    callback:(err,resp)=>{
      if(!err){
        res.status(200);
        res.write(resHelper(200, "success", resp));
        res.end()
      } else {
        res.status(500);
        res.write(resHelper(500, "fail", resp));
        res.end()
      }
    
    }
  })
}
function queryDailyCount(req, res, next) {
  queryDao.IqueryDailyCount({
    id:req.id,
    callback:(err,resp)=>{
      if(!err){
        res.status(200);
        res.write(resHelper(200, "success", resp));
        res.end()
      } else {
        res.status(500);
        res.write(resHelper(500, "fail", resp));
        res.end()
      }
    
    }
  })
}
function queryEveryDay(req, res, next) {
  queryDao.IqueryEveryDay({
    id:req.id,
    callback: (err,resp)=>{
      if(!err){
        res.status(200);
        res.write(resHelper(200, "success", resp));
        res.end()
      } else {
        res.status(500);
        res.write(resHelper(500, "fail", resp));
        res.end()
      }
    
    }
  })
}
function queryWork(req, res, next) {
  queryDao.IqueryWork({
    id:req.id,
    callback: (err,resp)=>{
      if(!err){
        res.status(200);
        res.write(resHelper(200, "success", resp));
        res.end()
      } else {
        res.status(500);
        res.write(resHelper(500, "fail", resp));
        res.end()
      }
    
    }
  })
}
function queryMyInfo(req, res, next) {
  queryDao.IqueryMyInfo({
    id:req.id,
    callback: (err,resp)=>{
      if(!err){
        res.status(200);
        res.write(resHelper(200, "success", resp));
        res.end()
      } else {
        res.status(500);
        res.write(resHelper(500, "fail", resp));
        res.end()
      }
    
    }
  })
}
function queryUsers(req, res, next) {
  queryDao.IqueryUsers({
    id:req.id,
    callback: (err,resp)=>{
      if(!err){
        res.status(200);
        res.write(resHelper(200, "success", resp));
        res.end()
      } else {
        res.status(500);
        res.write(resHelper(500, "fail", resp));
        res.end()
      }
    
    }
  })
}
// function queryMyinfo(req, res, next) {
//   queryDao.IqueryUsers({
//     id:req.id,
//     callback: (err,resp)=>{
//       if(!err){
//         res.status(200);
//         res.write(resHelper(200, "success", resp));
//         res.end()
//       } else {
//         res.status(500);
//         res.write(resHelper(500, "fail", resp));
//         res.end()
//       }
    
//     }
//   })
// }
module.exports = {
  queryDaily,
  queryEveryDay,
  queryMyInfo,
  queryWork,
  queryUsers,
  queryDailyById,
  queryDailyCount
};
