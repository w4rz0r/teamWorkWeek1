/* printer ut øvelser gjordt denne uken */
function currentWeekWorkouts() {
  let thisWeekExercise = ``;
   model.data.currentWeekStats.forEach((exercise) => {
    thisWeekExercise += `
    <div>Exercise: ${exercise.name} reps: ${exercise.value}</div>
    `;
  })
  return thisWeekExercise;
}

/* printer ut øvelser gjordt forrige uke */
function lastWeek() {
  let lastWeekExercise = ``;
   model.data.lastWeekStats.forEach((exercise) => {
    lastWeekExercise += `
    <div>Exercise: ${exercise.name} reps: ${exercise.value}</div>
    `;
  })
  return lastWeekExercise;
}

/* filtrerer ut øvelser som = forrige uke og += dem til statistikk */
function lastWeekPlussEquals() {
  resetToDefault();
  let exerciseLastWeek = user.doneExercises.filter((weekNumber) => weekNumber.weekNo === lastWeekResult)
  exerciseLastWeek.forEach((id) => {
    model.data.lastWeekStats.forEach((statId) => {
      if (id.id === statId.id) {
      statId.value += id.reps;
      }
    })
  })
}

/* filtrerer ut øvelser som = denne uken og += dem til statistikk */
function currentWeekPlussEquals() {
  let thisWeeksStats = ``;
  resetToDefault();
  let exerciseThisWeek = user.doneExercises.filter((weekNumber) => weekNumber.weekNo === currentWeek);
  exerciseThisWeek.forEach((id) => {
    model.data.currentWeekStats.forEach((statId) => {
      if (id.id === statId.id) {
      statId.value += id.reps;
      }
    })
  })
  console.log(exerciseThisWeek);
  return thisWeeksStats;
}

/* resetter alt til 0 */
function resetToDefault() {
  let resetWeek =
  [
    { id: 1, name: 'Pushup', value: 0 },
    { id: 2, name: 'Situps', value: 0 },
    { id: 3, name: 'Squats', value: 0 },
    { id: 4, name: 'Planking', value: 0 },
    { id: 5, name: 'Wall sit', value: 0 },
    { id: 6, name: 'Jumping jacks', value: 0 },
  ]
  model.data.currentWeekStats = resetWeek;
}
