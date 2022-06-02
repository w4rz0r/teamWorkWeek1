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

  
  
  model.data.doneExercises.forEach((doneExercise) => {
    if (doneExercise.userId === currentUser)
    //   if ()
    {
     
      // statisticsHtml = `<div>Week: ${doneExercise.weekNo}</div><br>`;
      statisticsHtml += `
      <div>Week: ${doneExercise.weekNo}</div>
        <div>Exercise: ${workoutName}</div>
        <div>Reps: ${doneExercise.reps}</div><br>
        
        
    `;
    }
  });
  return statisticsHtml;
}