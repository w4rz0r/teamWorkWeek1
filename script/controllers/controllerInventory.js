//printer ut NFT fra inventory til bruker til view
function printNftInventory() { 
            let inventoryHtml = "";
            user.inventory.forEach(nft => {
                inventoryHtml += `
                <div class="row">
                    <div class="rewards-col">
                        <img src="${nft.image}">
                        <div class="layer2">
                            <h3>${nft.name}<br>${nft.cost}$</h3>
                        </div>
                    </div>
                </div>
            `;
            });
            return inventoryHtml;
    };


