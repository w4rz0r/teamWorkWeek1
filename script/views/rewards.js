views.rewards = () => {
    return /*html*/ `
    ${getNavigation()}

    <section class="rewards">
        <h1 class="headLine">Choose Your rewards</h1>
        <p>NFT'S</p>
        ${printNft()}    
    </section>

    <section class="rewards">
        <h1 class="headline">Coupons</h1>
        <p>Coupons</p> 
        ${printCoupon()}
    </section>
`;}
