//printer ut NFT til view
function printNft() {
    let rewardsHtml = "";
    model.data.rewards.forEach(reward => {
        if (reward.type === 'nft') {
        rewardsHtml += /*html*/`
        <div class="row">
            <div class="rewards-col" onclick="printNftInventory(${reward.rewardId}), buyItems(${reward.cost}, ${reward.rewardId})">
                <img src="${reward.image}">
                <div class="layer2">
                    <h3>${reward.name}<br>${reward.cost}</h3>
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
        rewardsHtml += /*html*/`
        <div class="row">
            <div class="rewards-col" onclick="printCouponInventory(${reward.rewardId}), moveFromRewardsToInventorycoupons(${reward.rewardId})">
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

function moveFromRewardsToInventorycoupons(id) {
    const reward = model.data.rewards.find((reward, index) => {
        if (reward.rewardId === id) {
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

function buyItems(rewardCost, id) {
        if (user.currency > rewardCost) {
            user.currency -= rewardCost;
            moveFromRewardsToInventory(id);
        }
    };