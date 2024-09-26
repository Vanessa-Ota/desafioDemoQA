const { By, Key, until } = require('selenium-webdriver');
const path = require('path');



 class PracticeFormPage {
    constructor(driver) {
    this.driver = driver;
    }

    async preencherPracticeFormPage(dadosDoCliente) {

//////////////////////////////////////////
//////////// DADOS INICIAIS //////////////
//////////////////////////////////////////

        //nome
        let nomeInput = await this.driver.findElement(By.xpath("//input[@placeholder='First Name']"));
        await nomeInput.sendKeys(dadosDoCliente.nome);

        //sobrenome
        let sobrenomeInput = await this.driver.findElement(By.xpath("//input[@placeholder='Last Name']"));
        await sobrenomeInput.sendKeys(dadosDoCliente.sobrenome);       

        //email
        let emailInput = await this.driver.findElement(By.xpath("//input[@placeholder='name@example.com']"));
        await emailInput.sendKeys(dadosDoCliente.email);   

//////////////////////////////////////////
///////////////// GENERO /////////////////
//////////////////////////////////////////

        // RadioButton de genero
        if (dadosDoCliente.genero === 'masculino') {
            let radioMasculino = await this.driver.findElement(By.xpath("//label[@for='gender-radio-1'][contains(.,'Male')]"));
            await radioMasculino.click();
        }else if (dadosDoCliente.genero === 'feminino') {
            let radioFeminino = await this.driver.findElement(By.xpath("//label[@for='gender-radio-2'][contains(.,'Female')]"));
            await radioFeminino.click();
        }else {
            let radioOther = await this.driver.findElement(By.xpath("//label[@for='gender-radio-3'][contains(.,'Other')]"));
            await radioOther.click();
        }

//////////////////////////////////////////
///////////////// TELEFONE ///////////////
//////////////////////////////////////////

        //telefone
        let telefoneInput = await this.driver.findElement(By.xpath("//input[contains(@placeholder,'Mobile Number')]"));
        await telefoneInput.sendKeys(dadosDoCliente.telefone);
        await telefoneInput.sendKeys(Key.TAB);
        await telefoneInput.sendKeys(Key.TAB);

//////////////////////////////////////////
///////////////// DT NASC /////////////////
//////////////////////////////////////////

        //data Nascimento - format MM-DD-YYYY
        let birthDateInput = await this.driver.findElement(By.xpath("//input[@id='dateOfBirthInput']"));

        await birthDateInput.sendKeys(Key.COMMAND, 'a'); //Caso de SO Win trocar para CTRL!
        await birthDateInput.sendKeys(dadosDoCliente.birthDate);   

        let birthDateOUTInput = await this.driver.findElement(By.xpath("//label[contains(.,'Date of Birth')]"));
        await birthDateOUTInput.click();


        //await this.driver.executeScript("window.scrollTo(0, 1500);");
        await this.driver.executeScript("window.scrollTo(0, document.body.scrollHeight);");


//////////////////////////////////////////
///////////////// SUBJECTS ///////////////
//////////////////////////////////////////

        // Preencher "Subjects"
        const subjectsList = dadosDoCliente.Subjects;
        let subjectsInput = await this.driver.findElement(By.id('subjectsInput'));

        for (let subject of subjectsList) {
            await subjectsInput.sendKeys(subject);
            await subjectsInput.sendKeys(Key.ENTER);

        }

        await this.driver.executeScript("window.scrollTo(0, document.body.scrollHeight);");


//////////////////////////////////////////
///////////////// HOBIIE /////////////////
//////////////////////////////////////////

        for (const Hobbie of dadosDoCliente.Hobbie) {
            let checkboxHobbie = await this.driver.findElement(By.xpath("//label[contains(., '" + Hobbie + "')]"));
            if (!(await checkboxHobbie.isSelected())) {
                await checkboxHobbie.click();
            }
        }

//////////////////////////////////////////
///////////////// FOTO  /////////////////
//////////////////////////////////////////

        const filePath = path.resolve(__dirname, '../Images/' + dadosDoCliente.picture);

        let uploadFile = await this.driver.findElement(By.id('uploadPicture'));
        await uploadFile.sendKeys(filePath);


//////////////////////////////////////////
///////////////// ADDRESS  ///////////////
//////////////////////////////////////////

        let AddressInput = await this.driver.findElement(By.xpath("//textarea[@placeholder='Current Address']"));
        await AddressInput.sendKeys(dadosDoCliente.Address);   

//////////////////////////////////////////
///////////////// STATE  /////////////////
//////////////////////////////////////////

        let stateCampo = this.driver.findElement(By.id('state'));
        await stateCampo.click();
        let stateOpt = await this.driver.findElement(By.xpath("//div[contains(text(), '" + dadosDoCliente.State + "')]"));
        await stateOpt.click();

/////////////////////////////////////////
///////////////// CITY  /////////////////
/////////////////////////////////////////

        let cityCampo = this.driver.findElement(By.id('city'));
        await cityCampo.click();
        let cityOpt = await this.driver.findElement(By.xpath("//div[contains(text(), '" + dadosDoCliente.City + "')]"));
        await cityOpt.click();
    
/////////////////////////////////////////
///////// ENVIAR O FORMULARIO  //////////
/////////////////////////////////////////

        await this.driver.findElement(By.id('submit')).click();
        await this.driver.wait(until.elementLocated(By.xpath("//div[@class='modal-title h4'][contains(.,'Thanks for submitting the form')]")), 5000);

    }
 }
module.exports = PracticeFormPage;
