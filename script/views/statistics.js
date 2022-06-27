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
    <div class="bottombox"></div>
    </div>



    `;
};
