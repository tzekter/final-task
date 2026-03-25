const BasePage=require('./base.page')
const LoginFormComponent=require('../components/login/login-form.components')

const InventoryComponent=require('../components/inventory/inventory.components');
const CheckoutComponent=require('../components/checkout/checkout.components')


class LoginPage extends BasePage{
    constructor(){
        super('');
        this.loginForm=new LoginFormComponent();
        this.inventory=new InventoryComponent();
        this.checkout=new CheckoutComponent();
    }
    async login(username,password){
        await this.loginForm.inputUserName.setValue(username);
        await this.loginForm.inputPassword.setValue(password);
        await this.loginForm.btnLogin.click();
    }
}
module.exports= new LoginPage();