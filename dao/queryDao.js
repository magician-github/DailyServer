const curUser = require('../global');
const excuteSql = require('./DBUtils').excuteSql;
function IqueryDaily(params){
    let sql = '';
    if(params.id){
        sql = 'select * from daily where uid = ' + params.id+';';

    } else {
            sql = 'select * from daily limit' + ' ' + (parseInt(params.pagination) -1)*5+','+5+';';
    }
    excuteSql(sql,[],params.callback);
}
function IqueryDailyById(params){
    const id = params.id;
    let sql = 'select * from daily where id =' + id+';';
    excuteSql(sql,[],params.callback);
}
function IqueryDailyCount(params){
    sql = 'select count(*) as count from daily';


    excuteSql(sql,[],params.callback);
}
async function IqueryEveryDay(params){
    const sql = 'select * from everyday order by id desc limit 1;';
    excuteSql(sql,[],params.callback);

}
function IqueryWork(params){
    console.log('userid', params.id);
    // const sql = 'select * from work where uid = ' + params.id+';';
    const sql = 'select * from work;'

    excuteSql(sql,[],params.callback);

}
function IqueryMyInfo(params){
    const sql = 'select * from myinfo where id = ' + params.id+';';
    excuteSql(sql,[],params.callback);

}
function IqueryUsers(params){
    const sql = `select * from users where id = ${params.id};`;
    excuteSql(sql,[],params.callback);

}
function IqueryLogin(params){
    const sql = `select * from users where username = '${params.username}' and password = '${params.password}'`; 
    const sqlParams = [params.username,params.password];
    excuteSql(sql,[],params.callback);
}
module.exports = {
    IqueryDaily,
    IqueryEveryDay,
    IqueryMyInfo,
    IqueryWork,
    IqueryUsers,
    IqueryLogin,
    IqueryDailyCount,
    IqueryDailyById
    
 }
