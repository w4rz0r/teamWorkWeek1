function printStatistic() {
  statisticsHtml = ``;
  user.doneExercises.forEach((doneExercise) => {
    if (doneExercise.weekNo === currentWeek) {
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

function currentWeekStats() {
  let currentWeekHtml = ``;
  let thisWeek = '';
  thisWeek = user.doneExercises.filter((weekNumber => {
    if (weekNumber.weekNo === currentWeek) {
      user.doneExercises.forEach((qwe) => {
        currentWeekHtml += `
  <div>Exercise: ${qwe.name}</div>
  <div>Reps: ${qwe.reps}</div>
  `;
      }
      )
    }
  }));
  return currentWeekHtml;
}

// function currentWeekStats() {
//   let currentWeekHtml = ``;
//   let thisWeek = user.doneExercises;
//   thisWeek = user.doneExercises.filter((weekNumber => {
//     if (weekNumber.weekNo === currentWeek) {
//       user.doneExercises.forEach((qwe) => {
        
//       })
//       currentWeekHtml += `
//   <div>Exercise: ${thisWeek.name}</div><br>
//   <div>Reps: ${thisWeek.reps}</div>
//   `;
//   }

//   }));
//   return currentWeekHtml;
// }





// Gamle metoden
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

// test();
//   function test(){
// const curwekResult = user.doneExercises.filter(week => week.weekNo === 25)
// testHtml = ``;
// console.log(curwekResult);
// testHtml += `
// <div> ${curwekResult.name} </div>
// `
// return testHtml;
//   }