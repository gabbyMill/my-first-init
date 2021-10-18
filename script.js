const moment = require("moment");

const timeToNow = dateArray => {
  return moment(dateArray.join(""), "YYYYMMDD").fromNow();
};
console.log(timeToNow(["1921", "08", "18"]));
