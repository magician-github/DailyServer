const excuteSql = require('./DBUtils').excuteSql;
const getNowTime = require('../utils/index').getNowTime;
function Ireg(params){
    const sql = `insert into users(username,password,create_time) values('${params.username}','${params.password}', '${getNowTime()}');`;
    excuteSql(sql,[],params.callback);
}
module.exports = {
    Ireg
 }
