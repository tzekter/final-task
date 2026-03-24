const { error } = require('console');
const LoginPage=require('../po/pages/login.page')
const loginPage=new LoginPage();
describe('SauceDemo Negative Testing use case 1',()=>{
    beforeEach(async()=>{
        await loginPage.open();
    });
    it('Show error if uername is empty',async()=>{
        await loginPage.login('','secret_sauce');
        const error=loginPage.loginForm.errorContainer;
        await expect(error).toHaveText('Epic sadface: Username is required')
    });
      it('Show error if password is empty',async()=>{
        await loginPage.login('standard_user','');
        const error=loginPage.loginForm.errorContainer;
        await expect(error).toHaveText('Epic sadface: Password is required')
    });
    it('Show error if postal code is empty', async()=>{
        await loginPage.login('standard_user','secret_sauce');

        await loginPage.inventory.addItemToCart('backpack');
        await loginPage.inventory.btnCart.click();

        await $('#checkout').click();

        await loginPage.checkout.inputFirstName.setValue('Rachel');
        await loginPage.checkout.inputLastName.setValue('Green');
        await loginPage.checkout.btnContinue.click();
        
        const error=loginPage.loginForm.errorContainer;
        await expect(error).toHaveText(expect.stringContaining('Error: Postal Code is required'));

    })

    
})