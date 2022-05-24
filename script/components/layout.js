function getNavigation() {
    return /*html*/ `
    <div class="topnav">
         
         
    <img class="logo" src="./images/Logo/logo2.svg">

           <label class="switch">
           <input type="checkbox">
           <span class="slider round"></span>
           </label>
       
           <span>Currency: </span>
           <a onclick="render('inventory')">Inventory</a>
           <a onclick="render('rewards')">Rewards</a>
           <a  onclick="render('statistics')">Statistic</a>
           <a  onclick="render('workouts')">Workout</a>
           <a  onclick="render('currentWorkout')">Current</a>
           <a  onclick="render('homepage')">Home</a>
           
   
</div>
    `;
}