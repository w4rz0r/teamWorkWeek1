/* variabler */
const myInterval = setInterval(decreaseCount, 1000);
let minutesLeft = 10;


if (model.state.currentWorkoutId === null) {
    currentWorkoutInput();
}

function getNewWorkOut() {
    let ww = Math.floor(Math.random() * model.workouts.length);
    return ww;
}

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

 function decreaseCount() {
    if (model.state.silentMode === false) {
    minutesLeft--;
    if (minutesLeft < 0) {
        minutesLeft = 10;
        render('currentWorkout');
     }
   }
 }
 


