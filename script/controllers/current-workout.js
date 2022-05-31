//const currentWorkOut = model.workouts[model.state.currentWorkoutId - 1];
// let randomIndex = null;

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
    let randomIndex = getNewWorkOut();
    workOut = model.workouts[randomIndex];
    model.state.currentWorkoutId = randomIndex + 1;
}