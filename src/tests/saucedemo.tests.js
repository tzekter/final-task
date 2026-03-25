const {LoginPage,InventoryPage}=require('../po');


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

        await $('#checkout').click();

        await LoginPage.checkout.inputFirstName.setValue('Rachel');
        await LoginPage.checkout.inputLastName.setValue('Green');
        await LoginPage.checkout.btnContinue.click();

        const error=await LoginPage.loginForm.errorContainer;
        await expect(error).toHaveText(expect.stringContaining('Error: Postal Code is required'));

    })
 });

    describe('SauseDemo-UC-2 Handling Latency',()=>{
        it('Login with perfomance_glitch_user and handle delay',async()=>{
            await LoginPage.open();
            await LoginPage.login('performance_glitch_user','secret_sauce');

            const inventoryList=await InventoryPage.inventory.rootEl;
            await inventoryList.waitForDisplayed({
                timeout:30000,
                timeoutMsg:'Inventory list didn`t appear after 15 seconds'
            })
            await expect(inventoryList).toBeExisting();
        });

        it('Reset app state and logout via BurgerMenu',async()=>{
            await InventoryPage.header.burgerMenuBtn.click();
            await InventoryPage.header.resetBtn.waitForDisplayed({
                timeout:5000
            });
            await InventoryPage.header.resetBtn.click();
            await InventoryPage.header.logoutBtn.click();
            await expect(browser).toHaveUrl('https://www.saucedemo.com/')
        });
    });

    
