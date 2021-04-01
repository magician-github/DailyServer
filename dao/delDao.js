const curUser = require('../global');
const excuteSql = require('./DBUtils').excuteSql;
function IdelDaily(params){
    const sql = `delete from daily where id = ${params.id};`;
    excuteSql(sql,[],params.callback);
}
function IdelEveryDay(params){
    const sql = `delete from everyday where id = ${params.id};`;
    excuteSql(sql,[],params.callback);
}
function IdelWork(params){
    const sql = `delete from work where id = ${params.id};`;
    excuteSql(sql,[],params.callback);
   
}
module.exports = {
    IdelDaily,
    IdelEveryDay,
    IdelWork
}