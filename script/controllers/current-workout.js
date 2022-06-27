const myInterval = setInterval(decreaseCount, 1000);
// 60000 for et minutt


if (model.state.currentWorkoutId === null) {
    currentWorkoutInput();
}

function getNewWorkOut() {
    let ww = Math.floor(Math.random() * model.workouts.length);
    return ww;
}

// function setPickedWorkoutToDefault() {
//     currentWorkOut = {
//         id: null,
//         name: '',
//         img: '',
//         rep: null,
//         description: ''
//     }
// }



function currentWorkoutInput() {
    model.state.currentWorkoutId = model.workouts[getNewWorkOut()].id;
}



function cancelCurrentWorkout() {
    currentWorkoutInput();
    model.state.page = 'homepage';
    render();
}


function doneCurrentWorkout() {
    let currentWorkOut = model.workouts[model.state.currentWorkoutId - 1];
    /* 
    doneExercises: {
    id: number;
    name: string;
    reps: number;
    currencyPoints: number;
    weekNo: number;
    }
    */

    let completedWorkOut = {
        id: currentWorkOut.id,
        name: currentWorkOut.name,
        reps: currentWorkOut.rep,
        currencyPoints: currentWorkOut.currencyPoints,
        weekNo: currentWeek,
    }
    user.doneExercises.push(completedWorkOut);
    user.currency += currentWorkOut.currencyPoints;
    currentWeekPlussEquals();
    currentWorkoutInput();
    model.state.page = 'homepage';
    render();
}




let minutesLeft = 10;

 //view
//  function printTime() {
//      let html = '';
//      html +=/*html*/ `
//      <div>${minutesLeft}</div>
//      `;
//  }


 function decreaseCount() {
    if (model.state.silentMode === false){
    console.log(minutesLeft);
     minutesLeft--;
     if (minutesLeft < 0) {
        minutesLeft = 10;
        render('currentWorkout');
     }
 }
 }
 
 //clearInterval(myInterval);

//  function pause() {
//      if (minutesLeft == 0)
//      minutesLeft = null;
//  }

