function checkCurrentUser() {
  let currentUser = model.state.currentUser;

  console.log(currentUser);
}
function printStatistic() {
  let currentUser = model.state.currentUser;
  let workoutName = model.workouts.name;
  let statisticsHtml = "";
  // model.workouts.forEach((workoutName) => {
  //   if (workouts.id === doneExercises) {
  //     console.log(workoutName)
  //   }
  // })

  let weeks = [];
  
  model.data.doneExercises.forEach((doneExercise) => {
    if (doneExercise.userId === currentUser && doneExercise.weekNo === result) {
      let exerciseName = model.workouts.find(exercise => doneExercise.exerciseId === exercise.id).name;

      if(exerciseName == undefined) {
        console.log("exercise id is invalid");
        return;
      }
      // statisticsHtml = `<div>Week: ${doneExercise.weekNo}</div><br>`;
      
      let weekNo = weeks.includes(doneExercise.weekNo) ? "" : doneExercise.weekNo;
      if(!weeks.includes(doneExercise.weekNo)){
        weeks.push(doneExercise.weekNo);
      }
      statisticsHtml += `
      
        <div>Exercise: ${exerciseName}</div>
        <div>Reps: ${doneExercise.reps}</div><br>
    `; 
    }
  });
  return statisticsHtml;
}

// Get current week
currentdate = new Date();
var oneJan = new Date(currentdate.getFullYear(),0,1);
var numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
var result = Math.ceil(( currentdate.getDay() + 1 + numberOfDays) / 7);
var lastWeekResult = result - 1;
console.log(`The week number of the current date (${currentdate}) is ${result}.`);
