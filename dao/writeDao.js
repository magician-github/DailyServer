const curUser = require('../global');
const excuteSql = require('./DBUtils').excuteSql;
function IwriteDaily(params){
    const {weather,mood,create_time,content,uid} = params;
    const sql = `insert into daily(weather,mood,create_time,content,uid) values('${weather}','${mood}','${create_time}','${content}',${uid})`;
    excuteSql(sql,[],params.callback);
}
function IwriteEveryDay(params){
    const {content,uid} = params;
    const sql = `insert into everyday(content,uid) values('${content}',${uid})`;
    excuteSql(sql,[],params.callback);
}
function IwriteMyInfo(params){
    const {name,age,sex,tel,email,hobby,address,birth,uid} = params;
    const sql = `insert into myinfo(name,age,sex,tel,email,hobby,address,birth,uid) values('${name}',${age},'${sex}','${tel}','${sex}','${hobby}','${address}','${birth}',${uid})`;
    excuteSql(sql,[],params.callback);
}

function IwriteWork(params){
    const {title,time,status,uid} = params;
    const sql = `insert into work(title,time,status,uid) values('${title}','${time}','${status}',${uid})`;
    excuteSql(sql,[],params.callback);
   
}
module.exports = {
    IwriteDaily,
    IwriteEveryDay,
    IwriteWork,
    IwriteMyInfo
}