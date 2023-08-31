let button = prompt('Put your number:')

if (button <= 1) {
     console.log(`${button} Num not a prime number`)
 } else {
    let bool = true
    for (let i = 2; i < button; i++) {
        if (button % i === 0) {
            bool = false
            break
        }
    }
    if (bool) {
        console.log(`${button} Num a prime number`)
    } else {
        console.log(`${button} Num not a prime number`)
    }
}