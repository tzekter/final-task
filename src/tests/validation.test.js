const {LoginPage,InventoryPage, CartPage, CheckoutPage}=require('../po');


describe('SauceDemo Negative Testing UC-1',()=>{
    beforeEach(async()=>{
        await LoginPage.open();
    });

    it('Show error if uername is empty',async()=>{
        await LoginPage.login('','secret_sauce');
        const error=LoginPage.loginForm.errorContainer;
        await expect(error).toHaveText('Epic sadface: Username is required')
    });

      it('Show error if password is empty',async()=>{
        await LoginPage.login('standard_user','');
        const error=LoginPage.loginForm.errorContainer;
        await expect(error).toHaveText('Epic sadface: Password is required')
    });

    it('Show error if postal code is empty', async()=>{
        await LoginPage.login('standard_user','secret_sauce');

        await InventoryPage.inventory.addItemToCart('backpack');
        await InventoryPage.inventory.btnCart.click();

        await CartPage.proceedToCheckout();

        await CheckoutPage.checkoutForm.inputFirstName.setValue('Rachel');
        await CheckoutPage.checkoutForm.inputLastName.setValue('Green');
        await CheckoutPage.checkoutForm.btnContinue.click();

        const error=await LoginPage.loginForm.errorContainer;
        await expect(error).toHaveText(expect.stringContaining('Error: Postal Code is required'));

    })
 });

   
    
