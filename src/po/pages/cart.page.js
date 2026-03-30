const BasePage=require('./base.page');

class CartPage extends BasePage{
    constructor(){
        super('/cart.html');
    }
    get btnCheckout(){
        return $('#checkout');
    }
    async proceedToCheckout(){
        await this.btnCheckout.click();
    }
}
module.exports= new CartPage();