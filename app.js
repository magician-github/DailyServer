const Express = require('express');
const path = require("path");
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const history = require('connect-history-api-fallback');    
const curUser = require('./config')
let secretkey = 'secretkey'
const writeRouter = require('./routes/writeRouter.js').writeRouter;
const loginAndRegRouter = require('./routes/loginAndRegRouter').loginAndRegRouter;
const queryRouter = require('./routes/queryRouter'  ).queryRouter;
const updateRouter = require('./routes/updateRouter').updateRouter;
const delRouter = require('./routes/delRouter').delRouter;
const uploadRouter = require('./routes/uploadRouter').uploadRouter;
const config = require('./config.js');
const app = Express();
// 映射public目录中的静态资源
app.use(history());
const staticRoot = path.resolve(__dirname, "./public");
app.use(Express.static(staticRoot));
// 解析 application/x-www-form-urlencoded 格式的请求体
app.use(Express.urlencoded({extended:true}));
// 解析 application/json 格式的请求体
app.use(Express.json());
app.use(cookieParser());
// 解决请求跨域
app.all('/*',function (req, res, next) { 
    // res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.setHeader("Access-Control-Allow-Origin", '*');
    res.setHeader('Content-Type', 'application/json;charset=utf-8')
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Credentials","true");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method === "OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});
// 退出
app.get("/api/loginOut",(req,res,next)=>{
    req.id = -1;
    res.cookie('token', '', {
      maxAge: 600 * 8000,
      path: "/",
    });
  curUser.username = '' 
  curUser.id = -1        
  curUser.password = ''
  res.json({msg:"退出成功",code:200})
  next();
})
app.use((req,res,next) => {
    if(req.url !='/api/loginAndReg/login' && req.url !='/api/loginAndReg/reg' ){
        //token可能存在post请求和get请求
        let token = req.cookies.token||req.body.authorization || req.query.authorization || req.headers.authorization;
        jwt.verify(token,secretkey,function(err,decode){
           if(err){             
               res.json({
                   message: 'token过期，请重新登录',
                   resultCode: '403'
               })
           }else{
               req.id = decode.id;
               next();
           }
        })
    }else{
        next();
    }
  })

//处理请求的router
app.use('/api/loginAndReg', loginAndRegRouter);
app.use('/api/query',queryRouter);
app.use('/api/write',writeRouter);
app.use('/api/update',updateRouter);
app.use('/api/delete',delRouter);
app.use('/api/upload',uploadRouter);


app.listen(config.port,()=>{    
    console.log("服务器已启动，端口9000·····");
})
module.exports.app = app;