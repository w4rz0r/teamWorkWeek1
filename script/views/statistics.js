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
    
    <div textContainer id="graphText" style="position: absolute; margin-right: 60%;margin-top: 40px;">
      <div id="redLine" style="color: red">Pushups</div><br>
      <div id="blueLine" style="color: blue">Situps</div><br>
      <div id="greenLine" style="color: green">Squats</div><br>
      <div id="yellowLine" style="color: yellow">Planking</div><br>
      <div id="purpleLine" style="color: purple">Wall Sit</div><br>
      <div id="cyanLine" style="color: cyan">Jumping Jacks</div><br>
    </div>

    <div class="bottombox">
    <canvas id="myChart" style="width:100%;max-width:100%;height:100%;"></canvas>
    </div>
    </div>

    



    `;
};
