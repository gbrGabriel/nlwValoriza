import express from "express"; 

const app = express();


app.get('/teste', (request, response) =>{

    return response.send('Rota GET');
});

app.post('/teste-post', (request, response) =>{

    return response.send('Rota POST')
});
//http//localhost:3000
app.listen(3000, () =>{ console.log('Servidor Rodando!!')});