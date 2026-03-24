const BaseComponent=require('../common/base.component');
class LoginFormComponent extends BaseComponent{
    constructor(){
        super('.login_wrapper')
    }
    get inputUserName(){
        return this.rootEl.$('#user-name');
    }
    get inputPassword(){
        return this.rootEl.$('#password');
    }
    get btnLogin(){
        return this.rootEl.$('#login-button');
    }
    get errorContainer(){
        return $('.error-message-container');
    }
}
module.exports=LoginFormComponent;