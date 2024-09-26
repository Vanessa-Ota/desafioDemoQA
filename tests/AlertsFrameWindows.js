const { Builder, By } = require('selenium-webdriver');
const Page = require('../pages/demoqaHome.js');

(async function TestAlertsFrameWindows() {
    let driver = await new Builder().forBrowser('chrome').build();
    let page = new Page(driver);

        //abertura da home page
        await page.goToHomePage();

        //clicando no Alerts, Frame and Windows
        await page.clickOnAlertsFrameWindows();

        //clicando no Browser Windows
        let element1 = await driver.findElement(By.xpath("//span[contains(.,'Browser Windows')]"));
        await element1.click();        
        
        //clicando no New Windows
        let element2 = await driver.findElement(By.xpath("//button[@class='mt-4 btn btn-primary']"));
        await element2.click();  

        //Validando a nova janela aberta
        const originalWindow = await driver.getWindowHandle();

        await driver.wait(async () => {
            const windows = await driver.getAllWindowHandles();
            return windows.length === 2;  
        }, 5000);

        const windows = await driver.getAllWindowHandles();

        for(const window of windows) {
            if (window !== originalWindow) {
                await driver.switchTo().window(window);
                break;
            }
        }

        let novoTitulo = await driver.findElement(By.xpath("//h1[contains(.,'This is a sample page')]"));
        let novoTextoTitulo = await novoTitulo.getText();
        console.log('pagina: "' + novoTextoTitulo + '" aberta com sucesso!');


        await driver.close();
        
        await driver.switchTo().window(originalWindow);
        await driver.quit();

})();