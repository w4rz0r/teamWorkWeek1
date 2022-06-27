/*  USERS  */
let user = model.data.users.find((user) => user.id === model.state.currentUser);

/*  PRINT STATISTICS  */
let workoutName = model.workouts.name;
let statisticsHtml = "";
let weeks = [];

/* Total Exercises */

let allPushups = [];
let allSitups = [];
let allSquats = [];
let allPlanking = [];
let allJumpingJacks = [];


/*  DATE AND TIME  */
currentdate = new Date();
var oneJan = new Date(currentdate.getFullYear(),0,1);
var numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
var currentWeek = Math.ceil(( currentdate.getDay() + numberOfDays) / 7);
var lastWeekResult = currentWeek - 1;
console.log(`The week number of the current date (${currentdate}) is ${currentWeek}.`);