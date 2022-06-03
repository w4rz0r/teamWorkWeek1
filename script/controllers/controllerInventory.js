//printer ut NFT fra inventory til bruker til view
function printNftInventory(id) {
    const user = model.data.users.find((user) => user.id === model.state.currentUser);
    if (!user) {
        console.error(`user doesn't exist`);
        return;
    }  
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


