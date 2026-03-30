 const{ LoginPage,InventoryPage}=require('../po')

 describe('SauseDemo-UC-2 Handling Latency',()=>{
        it('Login with perfomance_glitch_user and handle delay',async()=>{
            await LoginPage.open();
            await LoginPage.login('performance_glitch_user','secret_sauce');

            const inventoryList=await InventoryPage.inventory.rootEl;
            await inventoryList.waitForDisplayed({
                timeout:30000,
                timeoutMsg:'Inventory list didn`t appear after 30 seconds'
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
