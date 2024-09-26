const { Builder, By } = require('selenium-webdriver');
const Page = require('../pages/demoqaHome.js');
const DadosCliente = require('../fixtures/clients.json');
const WebTablesPage = require('../pages/WebTablesPage.js');


(async function TestElementsWebTables() {
    let driver = await new Builder().forBrowser('chrome').build();
    let page = new Page(driver);

        //abertura da home page
        await page.goToHomePage();

        await page.clickOnElements();

        let element = await driver.findElement(By.xpath("//span[@class='text'][contains(.,'Web Tables')]"));
        await element.click();        


        //setando um cliente
        const cliente = DadosCliente.CliAna;

        //Adicionando novo registro
        let Add = await driver.findElement(By.id('addNewRecordButton'));
        await Add.click();

        //criando uma instancia para a classe de preenchimento
        let webTablesPage = new WebTablesPage(driver);

        //preenchendo o formulario
        await webTablesPage.addNovoRegistro(cliente);
        console.log('Novo registro adicionado com sucesso!');

        //editando o registro
        await webTablesPage.editRegistro(cliente);
        console.log('Registro editado com sucesso!');

        //deletando o registro
        await webTablesPage.deleteRegistro(cliente);
        console.log('Registro removido com sucesso!');


        await driver.quit();

}
)();