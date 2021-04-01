const excuteSql = require('./DBUtils').excuteSql;
const curUser = require('../global')

function IupdateDaily(params){
   
   const {id,weather,mood,content,create_time,callback} = params;
   const sql = `update daily set weather = '${weather}',mood = '${mood}',content='${content}', create_time = ${create_time} where id = ${id}`;
   excuteSql(sql,[],callback);
}
function IupdateEveryDay(params){
   const {id,content,callback} = params;
   const sql = `update everyday set content = '${content}' where id = ${id}`;
   excuteSql(sql,[],callback);
}
function IupdateMyInfo(params){
   const {id,age,hobby,birth,address,email,tel,name,sex,callback} = params;
   console.log('email',email)
   const sql = `update myinfo set age = '${age}',hobby = '${hobby}',birth='${birth}',address='${address}',email='${email}',sex='${sex}',tel='${tel}',name='${name}' where id = ${id}`;
   excuteSql(sql,[],callback);
}
function IupdateWork(params){
   const {id,time,title,status,callback} = params;
   const sql = `update work set time = '${time}',title = '${title}',status='${status}' where id = ${id}`;
   excuteSql(sql,[],callback);
   
}
module.exports = {
   IupdateDaily,
   IupdateEveryDay,
   IupdateMyInfo,
   IupdateWork
}