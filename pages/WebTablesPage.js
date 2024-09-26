const { By, Key, until } = require('selenium-webdriver');



 class WebTablesPage {
    constructor(driver) {
    this.driver = driver;
    }

    async addNovoRegistro(dadosDoCliente) {

        // Preenchimento do formulário
        await this.driver.findElement(By.id('firstName')).sendKeys(dadosDoCliente.nome);
        await this.driver.findElement(By.id('lastName')).sendKeys(dadosDoCliente.sobrenome);
        await this.driver.findElement(By.id('userEmail')).sendKeys(dadosDoCliente.email);
        await this.driver.findElement(By.id('age')).sendKeys(dadosDoCliente.Idade);
        await this.driver.findElement(By.id('salary')).sendKeys(dadosDoCliente.Salario);
        await this.driver.findElement(By.id('department')).sendKeys(dadosDoCliente.Departamento);

        //Submit para adicionar o registro
        let Submit = await this.driver.findElement(By.id('submit'));
        await Submit.click();

        //Validar existencia do registro na tabela
        await this.driver.wait(until.elementLocated(By.xpath("//div[text()='" + dadosDoCliente.nome + "']")), 5000);

        await this.driver.sleep(3000);

    }

    async deleteRegistro(dadosDoCliente) {


        await this.driver.findElement(By.xpath("//div[text()='" + dadosDoCliente.nome + "']"));

        let linhaCliente = await this.driver.findElement(By.xpath(`//div[contains(text(),'${dadosDoCliente.nome}')]/ancestor::div[@role='row']`));
        let deleteIcone = await linhaCliente.findElement(By.xpath(".//span[@title='Delete']"));
        await deleteIcone.click();

        await this.driver.sleep(3000);

    }

    async editRegistro(dadosDoCliente) {

        //await this.driver.findElement(By.xpath("//div[text()='" + dadosDoCliente.nome + "']"));

        let linhaCliente = await this.driver.findElement(By.xpath(`//div[contains(text(),'${dadosDoCliente.nome}')]/ancestor::div[@role='row']`));
        let editIcone = await linhaCliente.findElement(By.xpath(".//span[@title='Edit']"));
        await editIcone.click();

        //Espera abrir pagina editar
        await this.driver.sleep(1000);

        //Editar a idade e o salario
        let newAge = await this.driver.findElement(By.id('age'));
        let newSalary = await this.driver.findElement(By.id('salary'));


        //Limpa o valor antigo e coloca o novo
        await this.driver.sleep(1000);
        await newAge.clear();
        await this.driver.sleep(1000);
        await newAge.sendKeys('80');
        await this.driver.sleep(1000);


        await newSalary.clear();
        await this.driver.sleep(1000);
        await newSalary.sendKeys('1400');
        await this.driver.sleep(1000);


        //Salvar
        let salvar = await this.driver.findElement(By.id('submit'));
        await salvar.click();
        await this.driver.sleep(3000);

        //Nessa pratica os sleeps extras foram adicionados propositalmente para que a execução seja visivel a olho nu

    }

 }
module.exports = WebTablesPage;