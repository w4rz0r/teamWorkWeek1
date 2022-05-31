//printer ut NFT til view
function printNft() {
    let rewardsHtml = "";
    model.data.rewards.forEach(reward => {
        if (reward.type === 'nft') {
        rewardsHtml += `
        <div class="row">
            <div class="rewards-col">
                <img src="${reward.image}">
                <div class="layer2">
                    <h3>${reward.name}<br>${reward.cost}$</h3>
                </div>
            </div>
        </div>
    `;
    }});
    html = `<div class="rewards-container">`;
    return rewardsHtml;
}

//printer ut COUPONS til view
function printCoupon() {
    let rewardsHtml = "";
    model.data.rewards.forEach(reward => {
        if (reward.type === 'coupons') {
        rewardsHtml += `
        <div class="row">
            <div class="rewards-col">
                <img src="${reward.image}">
                <div class="layer2">
                    <h3>${reward.name}<br>${reward.cost}$</h3>
                </div>
            </div>
        </div>
    `;
    }});
    html = `<div class="rewards-container">`;
    return rewardsHtml;
}

function moveFromRewardsToInventory(object) {
    boughtItem = model.data.rewards.unshift(object, 1);
}