function getNavigation() {
    return /*html*/ `
    <header> 
            <img class="logo" src="./images/Logo/logo2.svg" onclick="render('homepage')">
            ${user.name}

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
    </header>
    `;
}

function didToggle(checkedState){
    model.state.silentMode = checkedState;
    if (model.state.silentMode === true) {
    model.state.silentModeisChecked = 'checked';
    } else model.state.silentModeisChecked = 'unchecked';
    console.log(checkedState);
}
