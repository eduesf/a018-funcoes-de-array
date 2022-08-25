const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

//  Resolução do Exercício 1

// a)

const objCaixaAlta = (obj) =>{
    return {
        nome: obj.nome.toUpperCase(),
        profissao: obj.profissao.toUpperCase(),
        username: obj.username.toUpperCase(),
        senha: obj.senha.toUpperCase(),
    }
}
console.log (objCaixaAlta(objeto))


// b)

const correTexto = (obj1) => {
    return `${obj1.nome}${obj1.profissao}${obj1.username}${obj1.senha}`
}
console.log (correTexto(objeto))

// c)

const imprimeValor = (Obj2,callback) => {
    const impressao = callback(Obj2)
    console.log(impressao)
    
    return impressao
}

imprimeValor(objeto,objCaixaAlta)
imprimeValor(objeto,correTexto)
