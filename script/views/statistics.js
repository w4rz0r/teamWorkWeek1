views.statistics = () => {
  return /*html*/ `
    ${getNavigation()}
    <div class="statisticsh1">
    <h1 class="headLine">Statistics</h1>
    </div>

    <div class="statisticsCenter">

    <div class="leftbox">Last Week: ${lastWeekResult}
    ${lastWeek()}
    </div>


    <div class="middlebox">Current Week: ${currentWeek}
    ${currentWeekWorkouts()}
    </div>


    <div class="rightbox"></div>
    </div>

    <div class="statisticsBottom">
    <div class="bottombox">
    <canvas id="myChart" style="width:100%;max-width:600px"></canvas>
    </div>
    </div>



    `;
};
