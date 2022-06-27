function getNavigation() {
    return /*html*/ `
    <header>
<<<<<<< Updated upstream
    ${user.name}
    <img class="logo" src="./images/Logo/logo2.svg" onclick="render('homepage')">
    
            <label class="switch">
            <input type="checkbox" ${model.state.silentModeisChecked} onchange="didToggle(this.checked)">
            <span class="slider round"></span>
            </label>
    <nav>
<ul class="nav__links">
        <li><a onclick="render('homepage')">Home</a></li>
        <li><a onclick="render('currentWorkout')">Current</a></li>
        <li><a onclick="render('workouts')">Workouts</a></li>
        <li><a onclick="render('statistics'), drawChart()">Statistic</a></li>
        <li><a onclick="render('rewards')">Rewards</a></li>
        <li><a onclick="render('inventory')">Inventory</a></li>
</ul>
    </nav>
    
    <span class="currency">Currency: ${user.currency}</span>
=======
        <div class="username-view">${user.name}</div>
        <img class="logo" src="./images/Logo/logo2.svg" onclick="render('homepage')">
                <label class="switch">
                <input type="checkbox" ${model.state.silentModeisChecked} onchange="didToggle(this.checked)">
                <span class="slider round"></span>
                </label>


>>>>>>> Stashed changes

                <input type="checkbox" id="nav-toggle" class="nav-toggle">
        <nav>
            <ul>
                <li><a onclick="render('homepage')">Home</a></li>
                <li><a onclick="render('currentWorkout')">Current</a></li>
                <li><a onclick="render('workouts')">Workouts</a></li>
                <li><a onclick="render('statistics')">Statistic</a></li>
                <li><a onclick="render('rewards')">Rewards</a></li>
                <li><a onclick="render('inventory')">Inventory</a></li>
            </ul>
            
        </nav>
        <label for="nav-toggle" class="nav-toggle-label">
        <span></span>
        </label>
        
        <span class="currency-wallet"><ion-icon name="card-outline"></ion-icon>: ${user.currency}</span>
    </header>
    `;
}

function didToggle(checkedState){
    model.state.silentMode = checkedState;
    
    if (model.state.silentMode === true) {
    model.state.silentModeisChecked = 'checked';
    }
    else model.state.silentModeisChecked = 'unchecked';
    console.log(checkedState);

}
// <div class="topnav">

         
//     <img class="logo" src="./images/Logo/logo2.svg">

//            
       
//            
//            <a onclick="render('inventory')">Inventory</a>
//            <a onclick="render('rewards')">Rewards</a>
//            <a  onclick="render('statistics')">Statistic</a>
//            <a  onclick="render('workouts')">Workout</a>
//            <a  onclick="render('currentWorkout')">Current</a>
//            <a  onclick="render('homepage')">Home</a>
           
   
// </div>