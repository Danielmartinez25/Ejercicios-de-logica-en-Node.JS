const range_vision = (num) => {
    let array = num.toString().split('').map(number => Number(number))
    let valor = []
    let sum = 0
    let minor = 0
    let repeat = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i - 1] === undefined) {
            let z = array[i]
            for (let x = 1; x <= z; x++) {
                sum += array[x]
            }
            valor.push(sum)
            sum = 0
        } else if (array[i + 1] === undefined) {
            let z = array[i]
            for (let c = array.length - 1; c >= 0; c--) {
                z--
                if (z >= 0) {
                    sum += array[c - 1]
                }
            }
            valor.push(sum)
            sum = 0
        }
        else {
            let z = array[i]
            for (let y = i; y <= array.length; y++) {
                z--
                if (z >= 0 && array[y + 1] !== undefined) {
                    sum += array[y + 1]
                }
            }
            let w = array[i]
            for (let y = i; y >= 0; y--) {
                w--
                if (w >= 0 && array[y - 1] !== undefined) {
                    sum += array[y - 1]
                }
            }
            valor.push(sum)
            sum = 0
        }
    }
    for (let cont = 0; cont < valor.length; cont++) {
        if (valor[cont + 1] < valor[cont]) {
            minor = valor[cont + 1]
        }
    }
    for (let cont = 0; cont < valor.length; cont++) {
        if (valor[cont] === minor) {
            repeat += 1
        }
    }
    if (repeat >= 2)
        return true
}

console.log(range_vision(34315))