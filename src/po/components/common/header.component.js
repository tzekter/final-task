const BaseComponent=require('./base.component');

class HeaderComponent extends BaseComponent{
    constructor(){
        super('.header_container');
    }
    get burgerMenuBtn(){
        return $('#react-burger-menu-btn')
    }
    get logoutBtn(){
        return $('#logout_sidebar_link')
    }
    get resetBtn(){
        return $('#reset_sidebar_link')
    }
    async openMenu(){
        await this.burgerMenuBtn.click();
        await this.logoutBtn.waitForDisplayed({
            timeout: 5000
        });
    }
}
module.exports=HeaderComponent;