function getNavigation() {
    const user = model.data.users.find((user) => user.id === model.state.currentUser);
    return /*html*/ `
    <header>
    <img class="logo" src="./images/Logo/logo2.svg" onclick="render('homepage')">
            <label class="switch">
           <input type="checkbox">
            <span class="slider round"></span>
            </label>
    <nav >
<ul class="nav__links">
        <li><a  onclick="render('homepage')">Home</a></li>
        <li><a  onclick="render('currentWorkout')">Current</a></li>
        <li><a  onclick="render('workouts')">Workout</a></li>
        <li><a  onclick="render('statistics')">Statistic</a></li>
        <li><a onclick="render('rewards')">Rewards</a></li>
        <li><a onclick="render('inventory')">Inventory</a></li>
</ul>
    </nav>
    
    <span class="currency">Currency: ${user.currency}</span>

    </header>
    `;
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