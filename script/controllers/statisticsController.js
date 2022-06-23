// function currentWeekWorkouts() {
//   let currentWeekHtml = ``;

//   let exerciseByWeek = user.doneExercises.filter((weekNumber) => weekNumber.weekNo === currentWeek)
//   exerciseByWeek.forEach((currentWeek) => {
//     currentWeekHtml += `<div>Exercise: ${currentWeek.name} Reps: ${currentWeek.reps}</div>
//     `;
//   })
//   console.log(exerciseByWeek);
//   return currentWeekHtml;
// }

function currentWeekWorkouts() {
  let thisWeekExercise = ``;
   model.data.currentWeekStats.forEach((exercise) => {
    thisWeekExercise += `
    <div>Exercise: ${exercise.name} reps: ${exercise.value}</div>
    `;
  })
  return thisWeekExercise;
}





// Gamle metoden
function lastWeek() {
  let lastWeekExercise = ``;
   model.data.lastWeekStats.forEach((exercise) => {
    lastWeekExercise += `
    <div>Exercise: ${exercise.name} reps: ${exercise.value}</div>
    `;
  })
  return lastWeekExercise;
}





function lastWeekPlussEquals() {
  let exerciseLastWeek = user.doneExercises.filter((weekNumber) => weekNumber.weekNo === lastWeekResult)
  exerciseLastWeek.forEach((id) => {
    model.data.lastWeekStats.forEach((statId) => {
      if (id.id === statId.id) {
      statId.value += id.reps;
      }
    })
  })
}


function currentWeekPlussEquals() {
  let exerciseThisWeek = user.doneExercises.filter((weekNumber) => weekNumber.weekNo === currentWeek);
  let thisWeeksExerciseByType = {};


  exerciseThisWeek.forEach(weeklyExercise => {
    if(!thisWeeksExerciseByType.hasOwnProperty(weeklyExercise.id)) {
      thisWeeksExerciseByType[weeklyExercise.id] = [weeklyExercise];
    } else thisWeeksExerciseByType[weeklyExercise.id].push(weeklyExercise);
  });

  console.log(thisWeeksExerciseByType);



  // exerciseThisWeek.forEach(exercise => {
  //   if(thisWeeksExerciseByType.length < 1) return;
  //   thisWeeksExerciseByType.forEach(e => {
  //     if(exercise.id != e.id) {
  //       thisWeeksExerciseByType.push(e);
  //       return;
  //     }
  //     if(exercise.id == e.id) {
  //       exercise.reps += e.reps;
  //     }
  //   });
  // });

  // exerciseThisWeek.forEach((id) => {
  //   model.data.currentWeekStats.forEach((statId) => {
  //     if (id.id === statId.id) {
  //     statId.value += id.reps;
  //     }
  //   })
  // })
  // console.log(exerciseThisWeek);
}


function resetToDefault() {
  let resetLastWeek =
  [
    { id: 1, name: 'Pushup', value: 0 },
    { id: 2, name: 'Situps', value: 0 },
    { id: 3, name: 'Squats', value: 0 },
    { id: 4, name: 'Planking', value: 0 },
    { id: 5, name: 'Wall sit', value: 0 },
    { id: 6, name: 'Jumping jacks', value: 0 },
  ]
   model.data.lastWeekStats = resetLastWeek;
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

// function printStatistic() {
//   statisticsHtml = ``;
//   user.doneExercises.forEach((doneExercise) => {
//     if (doneExercise.weekNo === currentWeek) {
//       let exerciseName = model.workouts.find(exercise => doneExercise.exerciseId === exercise.id).name;

//       if(exerciseName === undefined) {
//         console.log("exercise id is invalid");
//         return;
//       }
      
//       let weekNo = weeks.includes(doneExercise.weekNo) ? "" : doneExercise.weekNo;
//       if(!weeks.includes(doneExercise.weekNo)){
//         weeks.push(doneExercise.weekNo);
//       }
//       statisticsHtml += `
//         <div>Exercise: ${exerciseName}</div>
//         <div>Reps: ${doneExercise.reps}</div><br>
//     `; 
//     }
//   });
//   return statisticsHtml;
// }

// function currentWeekStats() {
//   let currentWeekHtml = ``;
//   let thisWeek = '';
//   thisWeek = user.doneExercises.filter((weekNumber => {
//     if (weekNumber.weekNo === currentWeek) {
//       user.doneExercises.forEach((qwe) => {
//         currentWeekHtml += `
//   <div>Exercise: ${qwe.name}</div>
//   <div>Reps: ${qwe.reps}</div>
//   `;
//       }
//       )
//     }
//   }));
//   return currentWeekHtml;
// }