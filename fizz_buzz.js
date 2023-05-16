const fizz_buzz = (valor) => {
    let array = []
    for (let i = 1; i <= valor; i++) {
        array.push(i)
    }
    for (let j = 0; j <= array.length; j++) {
        if (array[j] % 3 === 0 && array[j] % 5 === 0) {
            array[j] = 'FIzzBuzz'
        }
        if (array[j] % 3 === 0) {
            array[j] = 'Fizz'
        }
        if (array[j] % 5 === 0) {
            array[j] = 'Buzz'
        }
    }
    return console.log(array)
}

fizz_buzz(15)



