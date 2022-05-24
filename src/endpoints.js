import { Router } from 'express'

import { dobro, somar, media, ingresso, corprimaria } from './services.js';

const server = Router();

server.get('/dobro/:numero', (req, resp)=>{
    try{    
        let numero = Number(req.params.numero);
        
        const d = dobro(numero);
          
          resp.send({
                dobro: d    
        });
    }catch(err){
        resp.send({
            erro: err.message
        })
    }

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

server.get('/media', (req, resp) => {
    try{
        const a = Number(req.query.a);
        const b = Number(req.query.b);
        const c = Number(req.query.c);

        const m = media(a, b, c); 

            resp.send({
                med: m
            })
    }catch(err){
        resp.send({
            erro: err.message
        })

    }
    
})

server.post('/tabu', (req, resp) =>{
    try{
        let { n1 } = req.body;
        let r = tabu(n1);

        resp.send({
            tabuada: r
        })
    }catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.post('/dia2/IngressoCinema', (req , resp) => {
    try{
        const {a, b, c, d} = req.body;

        let x = ingresso(a, b, c, d);
        
        resp.send({
                ingr: x
        })
    }catch(err){
        resp.send({
        erro: err.message
    })
}
})

server.get('/dia2/corprimaria/:cor',(req, resp) => {
    try {
        const d = req.params.cor;

        let b = corprimaria(d);
        
        resp.send({
            primaria: b
        })

    }catch(err){
            resp.send({
                erro: err.message
            })
    }
})




export default server;