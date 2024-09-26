const { By } = require('selenium-webdriver');

class demoqaHome {

    constructor(driver) {
        this.driver = driver;
    }

    async goToHomePage() {
        await this.driver.get('https://demoqa.com/');
        await this.driver.manage().window().maximize();
        //console.log('Abertura da home page');
        //await this.driver.wait(2000);
    }

    async clickOnForms() {
        let Forms = await this.driver.findElement(By.xpath("//h5[contains(.,'Forms')]"));
        await Forms.click();        
    }

    async clickOnAlertsFrameWindows() {
        let Alerts = await this.driver.findElement(By.xpath("//h5[contains(.,'Alerts, Frame & Windows')]"));
        await Alerts.click();        
    }

    async clickOnElements() {
        let element3 = await this.driver.findElement(By.xpath("//h5[contains(.,'Elements')]"));
        await element3.click();        
    }

    async clickOnWidgets() {
        let Widgets = await this.driver.findElement(By.xpath("//h5[contains(.,'Widgets')]"));
        await Widgets.click();        
    }


    async wait(milliseconds) {
        await this.driver.sleep(milliseconds);
    }

}
module.exports = demoqaHome;



// async open(url) {
    //     await this.driver.get(url);
    // }


    // async wait(milliseconds) {
    //     await this.driver.sleep(milliseconds);
    // }

