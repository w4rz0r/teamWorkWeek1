views.currentWorkout = () => {
    const currentWorkOut = model.workouts[model.state.currentWorkoutId - 1];
    return /*html*/ `
    ${getNavigation()}
    <div>
    <h1>Current Workout<h1> <br>
    </div>

    <div class="content">
    <div>The workout:<br>${currentWorkOut.name}</div>
    <img class="currentPic" src="${currentWorkOut.img}"> <br>
    <p class="currentWorkoutDescription">${currentWorkOut.description}</p> 
    </div>

    <div class="currentWorkoutButtons">
    <button onclick="setPickedWorkoutToDefault()">Cancel</button>
    <button onclick="">Done</button>
    </div>
    `;
}
