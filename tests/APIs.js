const axios = require('axios');
const DadosCliente = require('../fixtures/clients.json');


(async function testeAPI() {
    const urlUser = 'https://demoqa.com/Account/v1/User';
    const urlToken = 'https://demoqa.com/Account/v1/GenerateToken';
    const urlAuth = 'https://demoqa.com/Account/v1/Authorized';
    const urlBooks = 'https://demoqa.com/BookStore/v1/Books';
    const urlAlug = 'https://demoqa.com/BookStore/v1/Books/ByISBN';
    const urlInfo = 'https://demoqa.com/Account/V1/User/ByUserId';

    //Informando cliente
    const cliente = DadosCliente.ClienteAPI;

    // Dados do novo usuário
    const userData = {
        userName: cliente.nome,
        password: cliente.senha
    };

    try {
        // Novo Usuário
        const userResponse = await axios.post(urlUser, userData, {
            //headers: { 'Content-Type': 'application/json'}
        });

        console.log('Sucesso ao criar o usuário:', userResponse.data);

        // Novo Token
        const tokenResponse = await axios.post(urlToken, userData, {
            //headers: { 'Content-Type': 'application/json'}
        });
        console.log(tokenResponse);
        console.log('Token:', tokenResponse.data.token);





        //Nova Autorizacao
        const authResponse = await axios.post(urlAuth, userData);
        
        if (authResponse.status === 200 && authResponse.data === true) {
            console.log('Usuário está autorizado.');
        }     
        else {
            console.log('Usuário não está autorizado.');
        }

        //Lista de Livros Disponiveis
        const booksResponse = await axios.get(urlBooks)
        console.log('Lista de Livros:');
        booksResponse.data.books.forEach(book => {
            console.log('Título: ' + book.title + ', Autor: ' +  book.author + ', ISBN: ' + book.isbn);
        });


        //Alugar dois livros
        const userID = userResponse.data.userID;
        const booksToRent = ['9781449325862','9781491950296'];
        for (const isbn of booksToRent) {
            const rentalData = {
                userId: userID,
                isbn:isbn
            };
            console.log(userID);
            console.log(isbn);

            const renResponse = await axios.put(urlAlug, rentalData);
            console.log('Livros alugados com sucesso!',renResponse);
        } 

        //Listar detalhes do Usuario
        const infoResponse = await axios.get(urlInfo)
        console.log('Dados do Usuario:', infoResponse);
    }
    catch (error) {
        console.error('Log de Erro', error.message);
    }
} ) ();
