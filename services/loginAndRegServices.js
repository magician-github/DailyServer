const url = require('url');
const curUser = require('../global');
const resHelper = require('../utils').resHelper;
let jwt = require('jsonwebtoken');
let secretkey = 'secretkey'
const queryDao = require('..//dao/queryDao');
const regDao = require('../dao/regDao');
// 登录
function login (req, res) {
    let  { username, password } = req.body
    // let urlParam = [username, password];
    queryDao.IqueryLogin({
        username,
        password,
        callback:(err,resp)=>{
            console.log('resp[0', resp[0]);
            if(!resp[0]){
                res.json({
                    meta:{
                        "msg": "用户名或密码错误！",
                        "status": 400
                    }
                })     
              }else{
                var token = jwt.sign({ id:resp[0].id,password:resp[0].password,username: resp[0].username }, secretkey, { expiresIn: 600 * 8000 });
                res.cookie('token', token, {
                    maxAge: 600 * 8000,
                    path: "/",
                  });
                  console.log('user',resp)
                resp[0].token = token
                req.id = resp[0].id
                curUser.username = resp[0].username
                curUser.id = resp[0].id           
                curUser.password = resp[0].password
                res.json({
                  // message:'cheng'
                  data: resp[0],
                  token:token,
                  meta: {
                    "msg": "登录成功",
                    "status": 200,
                    
                  }
                });
              }

        }
    })
}
function reg(req,res,next){
    let  { username, password } = req.body
    console.log(req.body,2222)
    regDao.Ireg({
        username,
        password,
        callback:function(err,resp){
            console.log('err',err);
            console.log('resp',resp);
            if(!err){
                res.status(200);
                res.write(resHelper(200,'注册成功',null))
            } else {
                res.status(200);
                res.write(resHelper(200,'该用户名已经被注册，请重新输入',null))
            }
            res.end();
        }
        
    });
   
}

module.exports = {
    login,
    reg,
}