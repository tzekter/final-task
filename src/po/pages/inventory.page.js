const BasePage=require('./base.page')
const {Inventory, Header}=require('../components');

class InventoryPage extends BasePage{
    constructor(){
        super('/inventory.html')
        this.inventory= new Inventory();
        this.header= new Header();
    }
}
module.exports= new InventoryPage();