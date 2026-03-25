const BaseComponent=require('../common/base.component');
const HeaderComponent=require('../common/header.component')

class InventoryComponent extends BaseComponent{
    constructor(){
        super('.inventory_list');
        this.header=new HeaderComponent();
    }
    get btnCart(){
        return $('.shopping_cart_link');
    }
    async addItemToCart(itemName){
        const button=await $(`#add-to-cart-sauce-labs-${itemName}`);
        await button.waitForDisplayed({timeout:5000})
        await button.click();
    }
}
module.exports=InventoryComponent;