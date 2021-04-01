const curUser = require('../global');
const excuteSql = require('./DBUtils').excuteSql;
const getNowTime = require('../utils/index').getNowTime;

function IuploadAvatar(params){
    const sql = `update users set avatar_url = '${params.url}' where id = ${params.id};`;
    excuteSql(sql,[],params.callback);
}
function IuploadImgs(params){
    const sql = `insert into myLove(img_url,uid) values('${params.url}',${params.id});`;
    excuteSql(sql,[],params.callback);
}

module.exports = {
    IuploadAvatar,
    IuploadImgs,
}