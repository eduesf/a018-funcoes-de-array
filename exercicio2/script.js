// Resolução do Exercício 2

const arrayDeNumeros = [22,33,44,55,66,77,88,99]

// a)

const multiplaPorTres = arrayDeNumeros.map((num,indice,array) => {
    const triplos=  num * 3

    return triplos
})
console.log(multiplaPorTres)



// b)

const numerosPelaMetade = arrayDeNumeros.map((num,indice,array)=>{
    const metades = num / 2

    return metades
})
console.log(numerosPelaMetade)
