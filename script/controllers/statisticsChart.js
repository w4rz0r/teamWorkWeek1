function drawChart(){
var xValues = ['January', 'February', 'Mars', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Desember'];

let chartOne = document.getElementById('myChart');

const myChart = new Chart(chartOne, {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      data: allPushups,
      borderColor: "red",
      fill: false
    }, { 
      data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
      borderColor: "blue",
      fill: false
    }, { 
      data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
      borderColor: "green",
      fill: false
    },
    { 
        data: [200,400,1000,1500],
        borderColor: "yellow",
        fill: false
      },
      { 
        data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
        borderColor: "purple",
        fill: false
      },
      { 
        data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
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

