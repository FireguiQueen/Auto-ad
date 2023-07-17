function numeros_telefone(){
    const sufixo = Math.floor(100000000 + Math.random() * 900000000).toString().substr(1, 8);
    return "149" + sufixo;
}

console.log(numeros_telefone())