const BaseComponent=require('../common/base.component');
class CheckoutComponent extends BaseComponent{
    constructor(){
        super('checkout_info_container');
    }
    get inputFirstName(){
        return $('#first-name');
    }
    get inputLastName(){
        return $('#last-name');
    }
    get inputPostalCode(){
        return $('#postal-code');
    }
      get btnContinue(){
        return $('#continue');
    }
}
module.exports=CheckoutComponent;