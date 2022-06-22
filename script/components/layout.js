function getNavigation() {
    return /*html*/ `
    <header class="nav_links">
        <div class="currentUserName">${user.name}</div>
            <img class="logo" src="./images/Logo/logo2.svg" onclick="render('homepage')">
            
                    <label class="switch">
                    <input type="checkbox" ${model.state.silentModeisChecked} onchange="didToggle(this.checked)">
                    <span class="slider round"></span>
                    </label>

                            <input type="checkbox" id="nav-burger" class="nav-burger">
                    <nav class="container_nav">
                            <ul class="menu_link">
                                    <li><a onclick="render('homepage')">Home</a></li>
                                    <li><a onclick="render('currentWorkout')">Current</a></li>
                                    <li><a onclick="render('workouts')">Workout</a></li>
                                    <li><a onclick="render('statistics')">Statistic</a></li>
                                    <li><a onclick="render('rewards')">Rewards</a></li>
                                    <li><a onclick="render('inventory')">Inventory</a></li>
                            </ul>
      
                </nav>
            <label for="nav-burger" class="nav-burger-label"> 
                            <span></span>
                        </label>
            <span class="currency">Currency: ${user.currency}</span>
    </header>
    `;
}

// SilenceMode Function
function didToggle(checkedState){
    model.state.silentMode = checkedState;
    
    if (model.state.silentMode === true) {
    model.state.silentModeisChecked = 'checked';
    }
    else model.state.silentModeisChecked = 'unchecked';
    console.log(checkedState);

}


// NavBare Controller
function hamOpen(openBurger) {
    
}


// <div class="topnav">

         
//     <img class="logo" src="./images/Logo/logo2.svg">   
//            <a onclick="render('inventory')">Inventory</a>
//            <a onclick="render('rewards')">Rewards</a>
//            <a  onclick="render('statistics')">Statistic</a>
//            <a  onclick="render('workouts')">Workout</a>
//            <a  onclick="render('currentWorkout')">Current</a>
//            <a  onclick="render('homepage')">Home</a>
// </div>



 
// function hamOpen() {
//     let x = document.getElementById('hamburg');
//     if (x.style.display === "block"){
//         x.style.display = "none";
//     } else {
//         x.style.display = "block";
//     }
// }