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
    user.doneExercises.push(model.workouts[model.state.currentWorkoutId - 1]);
    user.currency += model.workouts[model.state.currentWorkoutId - 1].currencyPoints;

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
     render();
 }
 }
 
 clearInterval(myInterval);

//  function pause() {
//      if (minutesLeft == 0)
//      minutesLeft = null;
//  }



