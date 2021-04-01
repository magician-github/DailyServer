const returnResponce = require('../utils').resHelper;
const delDao = require('../dao/delDao');
const url = require('url');
function delDaily(req,res,next){
    // const {id} = url.parse(req.url,true).query;
    const id = req.query.id
    delDao.IdelDaily({
        id:parseInt(id),
        callback:(err,resp)=>{
            if(!err){
                res.status(200);
                res.json({
                    code:200,
                    msg:"删除成功",
                    data:null
                })
                res.end();
            } else {
                res.json({
                    code:500,
                    msg:"删除失败",
                    data:null
                })
                res.end();
            }
        }
    })
}
function delEveryDay(req,res,next){
    const {id} = url.parse(req.url,true).query;
    delDao.IdelEveryDay({
        id:parseInt(id),
        callback:(err,resp)=>{
            if(!err){
                res.status(200);
                res.json({
                    code:200,
                    msg:"删除成功",
                    data:null
                })
                res.end();
            } else {
                console.log('err is',err)
                res.json({
                    code:500,
                    msg:"删除失败",
                    data:null
                })
                res.end();
            }
        }
    })
}
function delWork(req,res,next){
    const {id} = url.parse(req.url,true).query;
    delDao.IdelWork({
        id:parseInt(id),
        callback:(err,resp)=>{
            if(!err){
                res.status(200);
                res.json({
                    code:200,
                    msg:"删除成功",
                    data:null
                })
                res.end();
            } else {
                res.json({
                    code:500,
                    msg:"删除失败",
                    data:null
                })
                res.end();
            }
        }
    })
   
}
module.exports = {
    delDaily,
    delEveryDay,
    delWork
}