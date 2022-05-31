views.rewards = () => {
    return /*html*/ `
    ${getNavigation()}

    <section class="rewards">
    <h1 class="headLine">Choose Your rewards</h1>
    <p>NFT'S</p>

    ${printRewards()}

    
</section>

<section class="rewards">
<h1 class="headline">Roadmap</h1>
<p>coupons</p> 

</section>
    `;
}
