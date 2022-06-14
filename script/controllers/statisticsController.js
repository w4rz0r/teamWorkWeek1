function printStatistic() {
  statisticsHtml = ``;
  user.doneExercises.forEach((doneExercise) => {
    if (doneExercise.weekNo === result) {
      let exerciseName = model.workouts.find(exercise => doneExercise.exerciseId === exercise.id).name;

      if(exerciseName === undefined) {
        console.log("exercise id is invalid");
        return;
      }
      
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




function lastWeek() {
  let lastWeekExercise = ``;
   model.data.statisticsStats.forEach((exercise) => {
    lastWeekExercise += `
    <div>Exercise: ${exercise.name} reps: ${exercise.value}</div>
    `;
  })
  return lastWeekExercise;
}

// plussEquals();
// function plussEquals() {
//   model.data.doneExercises.forEach((doneId) => {
//     model.data.statisticsStats.forEach((statId) => {
//       if (doneId.exerciseId === statId.id) {
//         statId.value += doneId.reps;
//       }
//     })
//   });
// }

function plussEquals() {
  user.doneExercises.forEach((id) => {
    model.data.statisticsStats.forEach((statId) => {
      if (id.id === statId.id) {
      statId.value += id.reps;
      }
    })
  })
}





  // model.data.doneExercises.forEach((doneId) => {
  //   model.data.statisticsStats.forEach((statId) => {
  //     if (doneId.exerciseId === statId.id) {
  //       statId.value += doneId.reps;
  //     }
  //   })
  // });
