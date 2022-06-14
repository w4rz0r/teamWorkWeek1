/*  USERS  */
let user = model.data.users.find((user) => user.id === model.state.currentUser);

/*  PRINT STATISTICS  */
let workoutName = model.workouts.name;
let statisticsHtml = "";
let weeks = [];


/*  DATE AND TIME  */
currentdate = new Date();
var oneJan = new Date(currentdate.getFullYear(),0,1);
var numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
var currentWeek = Math.ceil(( currentdate.getDay() + numberOfDays) / 7);
var lastWeekResult = result - 1;
console.log(`The week number of the current date (${currentdate}) is ${currentWeek}.`);