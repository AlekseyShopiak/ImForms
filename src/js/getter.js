
function getDT () {
  const date_ob = new Date();

  const date = ("0" + date_ob.getDate()).slice(-2);
  const month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
  const year = date_ob.getFullYear();
  const hours = date_ob.getHours();
  const minutes = date_ob.getMinutes();
  const seconds = date_ob.getSeconds();

  const res =(year+"-"+month+"-"+date+" "+hours+":"+minutes+":"+seconds).toString();
  return res; 
}

module.exports = getDT(); //return current date in "YYYY-MM-DD HH:MM:SS" format