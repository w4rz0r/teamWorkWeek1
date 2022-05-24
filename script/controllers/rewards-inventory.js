

function moveRewardsToInventory(element) {

}

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
