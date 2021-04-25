const url = require('url');
const resHelper = require('../utils').resHelper;
const updateDao = require('../dao/updateDao');
// const curUser = require('../global');
// const pleaseLogin = require('../utils/index').pleaseLogin;
// const isLogin = require('../utils/index').isLogin;
function updateDaily(req,res,next){
   const params = req.body;
   updateDao.IupdateDaily({
      id:params.weather,
      mood:params.mood || '无标题',
      content:params.content || '1971-01-01',
      create_time:params.create_time || '未完成',
      callback:function (err, resp){
         if(!err){
            res.status(200);
            res.write(resHelper(200,'修改成功',null));
            res.end();
         } else {
            res.status(500);
            res.write(resHelper(200,'修改失败，请验证字段',null));
            res.end();
         }
      }
   });
}
function updateEveryDay(req,res,next){
   const params = req.body;
   console.log(29,params.content);
   updateDao.IupdateEveryDay({
      id:req.id,
      content:params.content,
      callback:function (err, resp){
         if(!err){
            res.status(200);
            res.write(resHelper(200,'修改成功',null));
            res.end();
         } else {
            res.status(500);
            res.write(resHelper(200,'修改失败，请验证字段',null));
            res.end();
         }
      }
   });
}
function updateMyInfo(req,res,next){
   const params = req.body;
   updateDao.IupdateMyInfo({
      id:req.id,
      name:params.name,
      age:params.age,
      sex:params.sex,
      tel:params.tel,
      address:params.address,
      email:params.email,
      birth:params.birth || "2020-11-21",
      hobby:params.hobby,
      callback:function (err, resp){
         if(!err){
            res.status(200);
            res.write(resHelper(200,'修改成功',null));
            res.end();
         } else {
            console.log(err);
            res.status(500);
            res.write(resHelper(500,'修改失败，请验证字段',null));
            res.end();
         }
      }
   });
}
function updateWork(req,res,next){
   const params = req.body;
   console.log('修改时间',params.time);

   updateDao.IupdateWork({
      id:params.id,
      title:params.title || '无标题',
      time:params.time || '1971-01-01',
      status:params.status || '未完成',
      callback:function (err, resp){
         if(!err){
            res.status(200);
            res.write(resHelper(200,'修改成功',null));
            res.end();
         } else {
            res.status(500);
            res.write(resHelper(200,'修改失败，请验证字段',null));
            res.end();
         }
      }
   });
}
function updatePwd(req,res,next){
   const params = req.body;

   updateDao.IupdatePwd({
      id:params.id,
      oldPwd:params.oldPwd,
      newPwd:params.newPwd,
      callback:function (err, resp){
         if(!err){
            res.status(200);
            res.json({
               code:200,
               msg:'修改成功'
            })
            res.end();
         } else {
            res.status(500);
            res.write(resHelper(200,'修改失败，请验证字段',null));
            res.end();
         }
      }
   });
}
module.exports = {
   updateDaily,
   updateEveryDay,
   updateMyInfo,
   updateWork,
   updatePwd
}