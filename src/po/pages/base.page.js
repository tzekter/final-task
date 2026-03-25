class BasePage{
    constructor(path){
        this.path=path;
    }
    async open(path=''){
        await browser.url(`https://www.saucedemo.com/${path}`)
    }
}
module.exports=BasePage;