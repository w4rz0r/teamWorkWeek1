views.workouts = () => {
  return /*html*/ `
  ${getNavigation()}
  <div class="workout-container">
      <div class="headLine">Workouts</div>

        <div class="workoutsContainer">
            <img class="workout1 pictu" src="./images/workout/workoutPushup.png">
            <img class="workout2 pictu" src="./images/workout/workoutCrunch.png">
            <img class="workout3 pictu" src="./images/workout/workoutSquat.png">
            <img class="workout4 pictu" src="./images/workout/workoutPlank.png">
            <img class="workout5 pictu" src="./images/workout/workoutWallSquat.png">
            <img class="workout6 pictu" src="./images/workout/workoutJumpingJacks.png">
            <img class="workout6 pictu" src="./images/workout/workoutHighKnees.png">
            <img class="workout6 pictu" src="./images/workout/workoutSidePlank.png">
        </div>
    </div>
    `;
};
