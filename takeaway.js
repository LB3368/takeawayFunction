const canWin = (n) => {
    if (n < 2) {
        return false
    }
    if (!canWin(n - 2) || !canWin(n - 3) || !canWin(n - 5)) {
        return true
    }
    return false
}

/*const canWin = (n) => {
    if (n < 2) {
        return false
    }
    if (n === 2 || n === 3 || n === 5) {
        return true
    }
    return !(canWin(n-2) && canWin(n-3) && canWin(n-5 ))
}
*/
console.log(canWin(1))
console.log(canWin(2))
console.log(canWin(3))
console.log(canWin(4))
console.log(canWin(5))
console.log(canWin(6))
console.log(canWin(7))
console.log(canWin(8))
console.log(canWin(9))
console.log(canWin(10))

