const returnResponce = require('../utils').resHelper;
const writeDao = require('../dao/writeDao');
function writeDaily(req,res,next){
   const {weather,mood,create_time,content} = req.body;
   writeDao.IwriteDaily({
      weather,
      mood,
      create_time,
      content,
      uid:req.id,
      callback:(err,resp)=>{
         console.log('err resp',err,resp)
         if(!err){
            res.status(200);
            res.json({
                code:200,
                msg:"新增日记成功",
                data:null
            })
            res.end();
        } else {
            res.json({
                code:500,
                msg:"新增日记失败",
                data:null
            })
            res.end();
        }

      }
   })
   
}
function writeEveryDay(req,res,next){
   const {content} = req.body;
   writeDao.IwriteEveryDay({
      content,
      uid:req.id,
      callback:(err,resp)=>{
         console.log('err, res[',err, resp)
         if(!err){
            res.status(200);
            res.json({
                code:200,
                msg:"新增每日一句成功",
                data:null
            })
            res.end();
        } else {
            res.json({
                code:500,
                msg:"新增每日语句失败",
                data:null
            })
            res.end();
        }

      }
   })
   
}
function writeMyInfo(req,res,next){
   const {name,age,sex,tel,email,address,hobby,birth} = req.body;
   writeDao.IwriteMyInfo({
      name,
      age,
      sex,
      tel,
      email,
      address,
      hobby,
      birth,
      uid:req.id,
      callback:(err,resp)=>{
         if(!err){
            console.log("resp is",resp, err)
            res.status(200);
            res.json({
                code:200,
                msg:"新增我的信息成功",
                data:null
            })
            res.end();
        } else {
         console.log("resp is",resp, err);
            res.json({
                code:500,
                msg:"新增我的信息失败",
                data:null
            })
            res.end();
        }

      }
   })
   
}
function writeWork(req,res,next){
   console.log('write work', req.body);
   const {title,time,status} = req.body;
   writeDao.IwriteWork({
      title,
      time,
      status,
      uid:req.id,
      callback:(err,resp)=>{
         if(!err){
            res.status(200);
            res.json({
                code:200,
                msg:"新增任务成功",
                data:null
            })
            res.end();
        } else {
            res.json({
                code:500,
                msg:"新增任务失败",
                data:null
            })
            res.end();
        }

      }
   })


}
function writeUsers(req,res,next){

}
module.exports = {
   writeDaily,
   writeEveryDay,
   writeMyInfo,
   writeWork,
   writeUsers
}