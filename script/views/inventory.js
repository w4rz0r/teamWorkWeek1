views.inventory = () => {
    return /*html*/ `
    ${getNavigation()}
    <section class="inventory">
        <h1 class="headLine">Inventory</h1>
        <div class="inventory-container">
        ${printNftInventory()}
        </div>
</section>
    `;
}