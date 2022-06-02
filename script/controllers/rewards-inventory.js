//printer ut NFT til view
function printNft() {
    let rewardsHtml = "";
    model.data.rewards.forEach(reward => {
        if (reward.type === 'nft') {
        rewardsHtml += /*html*/`
        <div class="row">
            <div class="rewards-col" onclick="moveFromRewardsToInventory(${reward.rewardId}), printNftInventory(${reward.rewardId})">
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
                    <h3>${reward.name}</h3>
                </div>
            </div>
        </div>
    `;
    }});
    html = `<div class="rewards-container">`;
    return rewardsHtml;
}

function moveFromRewardsToInventory(id) {
    const user = model.data.users.find((user) => user.id === model.state.currentUser);
    if (!user) {
        console.error(`user doesn't exist`);
        return;
    }
    const reward = model.data.rewards.find((reward, index) => {
        if (reward.rewardId === id) {
            model.data.rewards.splice(index, 1);
            return true;
        }
        return false;
    });
    if (!reward) {
        console.error(`reward doesn't exist`);
        return;
    }
    user.inventory.push(reward);
    render();
}