const moment = require("moment");
moment.suppressDeprecationWarnings = true;
const curUser = require("../global");
function resHelper(code, msg, data) {
  return JSON.stringify({
    code,
    msg,
    data,
  });
}
function timeHelper(target) {
  // console.log(target);
  // if(typeof target == 'string'){
  //     return moment(target);
  // } else {
  //     return moment(target).format('YYYY-MM-DD');
  // }
  return moment(target).format("YYYY-MM-DD");
}
function getNowTime() {
  const date = new Date();
  const y = date.getFullYear(),
    m = date.getMonth()+1,
    d = date.getDate();
  return timeHelper("" + y + "-" + m + "-" + d);
}
console.log(getNowTime())
function isLogin() {
  if (curUser.id >= 0) {
    return true;
  }
  return false;
}
function pleaseLogin(req,res){
    res.status(200);
    res.write(resHelper(200, "请先登录", null));
    res.end();

}

module.exports = {
  resHelper,
  timeHelper,
  getNowTime,
  isLogin,
  pleaseLogin
  
};
