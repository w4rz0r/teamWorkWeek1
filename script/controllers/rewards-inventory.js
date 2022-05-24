

function moveRewardsToInventory(element) {

}

// function printRewards() {
//     let rewardsHtml = "";
//     for (let i = 0; i < model.data.rewards.length; i++) {
//         rewardsHtml += `
//         <div class="row">
//         <div class="rewards-col">
//             <img src="${model.data.rewards[i].image}">
//             <div class="layer2">
//                 <h3>${model.data.rewards[i].name}</h3>
//             </div>
//         </div>
//     </div>
//     `;
//     }

// }


function printRewards() {
    let rewardsHtml = "";
    model.data.rewards.forEach(reward => {
        rewardsHtml += `
        <div class="row">
            <div class="rewards-col">
                <img src="${reward.image}">
                <div class="layer2">
                    <h3>${reward.name}</h3>
                </div>
            </div>
        </div>
    `;
    });
    html = `<div class="rewards-container">`;
    return rewardsHtml;
}