export function somar(a, b ){
    return  a + b;
}

export function dobro (n){
    return n * 2;
}

export function media (n1, n2, n3){
    return (n1 + n2 + n3) / 3;
}


export function ingresso(inteiro, meia, dia, nacio){
    let m = 14.25;
    let i = 28.50;
    if(nacio == "brasileiro"){
        m = 5;
        i = 5;
    }
    else if(dia == "quarta"){
        i = i / 2;
    }
    let s = inteiro * i;
    let y = m * meia;
    let total = s + y;
    
    return total;
}

export function corprimaria(cor){
    
    let primaria = cor == 'azul' || cor == 'vermelho' || cor == 'amarelo';

    return primaria;
}

