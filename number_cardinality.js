const number_cardinality = (valor) => {
    let str = valor.toString()
    let array = [];
    for (let x of str) {
        array.push(x)
    }
    let ultNumber = array.pop()
    let number = parseInt(ultNumber)
    if (number % 2 == 0 && number != 0) {
        return console.log('even')

    }
    else if (number % 2 != 0 && number != 5) {
        return console.log('odd')

    }
    else if (number === 0) {
        return console.log('zero')

    }
    else if (number === 5) {
        return console.log('five')
    }
}
number_cardinality()