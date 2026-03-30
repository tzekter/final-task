const BasePage=require('./base.page');
const CheckoutComponent=require('../components/checkout/checkout.components');

class CheckoutPage extends BasePage{
    constructor(){
        super('/checkout-step-one.html');
        this.checkoutForm=new CheckoutComponent();
    }
}
module.exports=new CheckoutPage();