const moment = require("moment");

const timeToNow = dateArray => {
  return moment(dateArray.join(""), "YYYYMMDD").fromNow();
};
console.log(timeToNow(["1921", "08", "18"]));

const timeFromAtoB = (dateA, dateB) => {
  return Math.abs(moment(dateA).diff(moment(dateB), "days"));
};
console.log(timeFromAtoB([2021, 5, 29], [2007, 3, 28]));
