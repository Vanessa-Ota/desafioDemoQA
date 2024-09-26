const { Builder, By } = require('selenium-webdriver');
const Page = require('../pages/demoqaHome.js');

(async function TestWidgets() {
    let driver = await new Builder().forBrowser('chrome').build();
    let page = new Page(driver);

        //abertura da home page
        await page.goToHomePage();

        //clicando no Widgets
        await page.clickOnWidgets();
        await driver.executeScript("window.scrollTo(0, 400);");
        

        //clicando no Progress Bar
        let ProgressBarList = await driver.findElement(By.xpath("//li[contains(.,'Progress Bar')]"));
        await ProgressBarList.click();       

        //clicando no Start
        let Start = await driver.findElement(By.xpath("//button[contains(.,'Start')]"));
        await Start.click();
        await driver.sleep(500);  

        //Parar o Progress Bar antes de 25%
        let Stop = await driver.findElement(By.xpath("//button[contains(.,'Stop')]"));
        await Stop.click(); 
        await driver.sleep(5000);

        let progressBar = await driver.findElement(By.css('.progress-bar'));
        progressValue = await progressBar.getAttribute('aria-valuenow');
        //console.log(progressValue); 
        let progressPercent = parseInt(progressValue, 10);
        if (progressPercent <= 25) {
            await driver.sleep(500);
            console.log(progressValue);
            console.log('Validando valor menor que 25%.'); 
        await Start.click();
        }
  
        await driver.sleep(1000);

        //Esperando o progresso chegar a 100% e resetar a barra
        let progressValueMax = 0     
        while (progressValueMax < 100) {
            let progressBarMax = await driver.findElement(By.css('.progress-bar'));
            progressValueMax = await progressBarMax.getAttribute('aria-valuenow');
            //console.log(progressValueMax); 

            if (progressValueMax === 100){
                break;
            }

            await driver.sleep(500);
        }

        let ResetButton = await driver.findElement(By.xpath("//button[contains(.,'Reset')]"));
        await ResetButton.click();
        await driver.sleep(500);

        await driver.quit();
        
        //Nessa pratica os sleeps extras foram adicionados propositalmente para que a execução seja visivel a olho nu

})();