import { Router } from 'express'

import { dobro, somar } from './services.js';

const server = Router();

server.get('/ping', (req, resp) => {
    resp.send('pong'); 
})

server.get('/dobro/:numero', (req, resp)=>{
        let numero = Number(req.params.numero);
        
        const d = dobro(numero);
          
          resp.send({
                dobro: d    
});

})


server.get('/somar', (req, resp) => {   
    try{   
        let a = Number(req.query.a);
        let b = Number(req.query.b);
        
        const x = somar(a, b);

        resp.send({
               soma:x
        })
    }catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
})


server.post('/somar', (req, resp) => {
    try{

    const {valores: {a , b}} =  req.body;

    const x = somar(a, b);


    resp.send({
            soma: x 
    })
}
    catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
})

export default server;