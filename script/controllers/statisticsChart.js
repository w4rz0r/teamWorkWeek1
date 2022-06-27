function drawChart(){
var xValues = ['January', 'February', 'Mars', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Desember'];

let chartOne = document.getElementById('myChart');

const myChart = new Chart(chartOne, {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      data: [6, 15, 40, 70, 50, 40, 35, 20, 1, 5, 10, 20],
      borderColor: "red",
      fill: false
    }, { 
      data: [70, 55, 40, 50, 30, 15, 60, 70, 50, 45, 40, 30],
      borderColor: "blue",
      fill: false
    }, { 
      data: [2, 10, 40, 30, 35, 20, 15, 6, 10, 25, 33, 60],
      borderColor: "green",
      fill: false
    },
    { 
        data: [80, 70, 50, 55, 58, 66, 40, 30, 50, 75, 90, 100],
        borderColor: "yellow",
        fill: false
      },
      { 
        data: [30, 35, 15, 1, 7, 30, 36, 50, 55, 57, 60, 70],
        borderColor: "purple",
        fill: false
      },
      { 
        data: [90, 75, 70, 55, 40, 30, 15, 36, 40, 60, 30, 35],
        borderColor: "cyan",
        fill: false
      }
]
  },
  options: {
    legend: {display: false}
  }
});
}


testPushups();
function testPushups(){


// let pushups = user.doneExercises.filter((exercise) => weekNumber.weekNo === currentWeek);
user.doneExercises.forEach((id) => {
    if (id.id === 1) {
    allPushups.push(id.reps);
    }
  })
  console.log(allPushups);
}

