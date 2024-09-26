const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');


const testsDirectory = './tests/';

async function runTests() {
    // Leia todos os arquivos no diretório especificado
    const files = fs.readdirSync(testsDirectory);

    // Filtre apenas os arquivos .js
    const testFiles = files.filter(file => file.endsWith('.js'));

    for (const testFile of testFiles) {
        await new Promise((resolve, reject) => {
            exec(`node ${path.join(testsDirectory, testFile)}`, (error, stdout, stderr) => {
                if (error) {
                    console.error(`Erro ao executar ${testFile}:`, stderr);
                    reject(error);
                } else {
                    console.log(`Resultado do ${testFile}:`, stdout);
                    resolve();
                }
            });
        });
    }
}

runTests().catch(error => console.error('Erro na execução dos testes:', error));