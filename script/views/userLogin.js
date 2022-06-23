views.userLogin = () => {
    return /*html*/ `
    
    <div class="homepageText">
    <div class="thp1">Welcome to AA-N </div>
    
    <div class="thp2">Your life is better when you use it!!</div>

    <div class="thp3">Success is walking from failure to failure with no loss of enthusiasmt</div>

    </div>
    
    <button onclick="loginUser(7)">kong Terje</button>
    <button onclick="loginUser(8)">Benjamin</button>
    <button onclick="loginUser(13)">aristoteles</button>
    ${minutesLeft}
    `;
}

function loginUser(loggedInAs){
model.state.currentUser = loggedInAs;
user = model.data.users.find((user) => user.id === model.state.currentUser);

lastWeekPlussEquals();
currentWeekPlussEquals();
render('homepage');
}

