//printer ut NFT fra inventory til bruker til view
function printNftInventory() { 
            let inventoryHtml = "";
            user.inventory.forEach(nft => {
                inventoryHtml += `
                <div class="row">
                    <div class="rewards-col">
                        <img src="${nft.image}">
                        <div class="layer2">
                            <h3>${nft.name}</h3>
                        </div>
                    </div>
                </div>
            `;
            });
            return inventoryHtml;
    };


//printer ut cupong fra inventory til bruker til view
function printCouponInventory() { 
    let inventoryHtml = "";
    user.inventory.forEach(nft => {
        inventoryHtml += `
        <div class="row">
            <div class="rewards-col">
                <img src="${nft.image}">
                <div class="layer2">
                    <h3>${nft.name}<br>$</h3>
                </div>
            </div>
        </div>
    `;
    });
    return inventoryHtml;
};