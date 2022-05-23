views.homepage = () => {
    return /*html*/ `
    
    <div class="topnav">
         
         
         <img src="#">

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
                <a  onclick="render('homepaget')">Home</a>
                
        
  </div>
    `;
}