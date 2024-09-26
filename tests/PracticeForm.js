const { Builder, By } = require('selenium-webdriver');
const Page = require('../pages/demoqaHome.js');
const DadosCliente = require('../fixtures/clients.json');
const PracticeFormPage = require('../pages/practiceFormPage.js');


(async function TestPracticeForm() {
    let driver = await new Builder().forBrowser('chrome').build();
    let page = new Page(driver);

        //abertura da home page
        await page.goToHomePage();

        //clicando no formulario da home page
        await page.clickOnForms();
        
        //clicando no formulario Practice Form
        let element = await driver.findElement(By.xpath("//span[@class='text'][contains(.,'Practice Form')]"));
        await element.click();        

        //criando uma instancia para a classe de preenchimento
        let practiceFormPage = new PracticeFormPage(driver);

        //setando um cliente
        const cliente = DadosCliente.CliJoao;

        //preenchendo o formulario
        await practiceFormPage.preencherPracticeFormPage(cliente);

        console.log('Formulário preenchido e enviado com sucesso!');

        await driver.sleep(3000);

        await driver.quit();
    
}
)();