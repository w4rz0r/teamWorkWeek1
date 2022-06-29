views.currentWorkout = () => {
    const currentWorkOut = model.workouts[model.state.currentWorkoutId - 1];
    return /*html*/ `
    ${getNavigation()}
    <div>
        <h1 class="headLine">Current Workout<h1> <br>
    </div>

    <div class="content">
        <div>The workout:<br>${currentWorkOut.name}</div>
        <img class="currentPic" src="${currentWorkOut.img}"> <br>
        <p class="currentWorkoutDescription">${currentWorkOut.description}</p>
    </div>

    <div class="currentWorkoutButtons">
        <button onclick="cancelCurrentWorkout()">Cancel</button>
        <button onclick="doneCurrentWorkout()">Done</button>
    </div>
    `;
}
