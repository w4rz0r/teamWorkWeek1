//const currentWorkOut = model.workouts[model.state.currentWorkoutId - 1];
// let randomIndex = null;
const user = model.data.users.find((user) => user.id === model.state.currentUser);


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



function cancelCurrentWorkout() {
    currentWorkoutInput();
    model.state.page = 'homepage';
    render();
}


function doneCurrentWorkout() {
    model.data.doneExercises.push(model.workouts[model.state.currentWorkoutId - 1]);
    user.currency += model.workouts[model.state.currentWorkoutId - 1].currencyPoints;

    currentWorkoutInput();
    model.state.page = 'homepage';
    render();
}