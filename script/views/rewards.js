views.rewards = () => {
    return /*html*/ `
    ${getNavigation()}

    <section class="rewards">
    <h1>Choose Your rewards</h1>
    <p>NFT'S</p>

    ${printRewards()}

    
</section>

<section class="rewards">
<h1>Roadmap</h1>
<p>coupons</p> 

</section>
    `;
}