const mysql = require('mysql');
const config = {
    host:'localhost',
    port:'3306',
    user:'root',
    database:'diary',
    password:'chenDuyi0711'
}
function createConnection(){
    const connecttion = mysql.createConnection(config);
    return connecttion;

}
function excuteSql(sql, params,callback){
    const con = createConnection();
    con.connect(err=>{
        if(!err){
            console.log("连接数据库成功");
        }
    });
    con.query(sql,[],callback);
    con.end();
}
module.exports.excuteSql = excuteSql;