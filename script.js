const moment = require("moment");

const timeToNow = dateArray => {
  let correctFormat = "";
  dateArray.forEach(x => (correctFormat += x));
  return moment(correctFormat, "YYYYMMDD").fromNow();
};
console.log(timeToNow(["1921", "08", "18"]));
