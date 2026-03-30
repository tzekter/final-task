const BasePage=require('./base.page');
const LoginFormComponent=require('../components/login/login-form.components');

class LoginPage extends BasePage{
    constructor(){
        super('');
        this.loginForm=new LoginFormComponent();
    }
    async login(username,password){
        await this.loginForm.inputUserName.setValue(username);
        await this.loginForm.inputPassword.setValue(password);
        await this.loginForm.btnLogin.click();
    }
}
module.exports= new LoginPage();