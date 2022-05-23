views.currentWorkout = () => {
    return /*html*/ `
    ${getNavigation()}
    <div>
    <h1>Current Workout<h1> <br>
    </div>

    <div class="content">
    <div>The workout:</div>
    </div>

    <div class="currentWorkoutButtons">
    <button onclick="">Cancel</button>
    <button onclick="">Done</button>
    </div>
    `;
}
