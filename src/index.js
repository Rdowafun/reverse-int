module.exports = function reverse(n) {
    let str = ""
    n = n < 0 ? n * -1 : n
    n += ""
    for (let i = n.length - 1; i >= 0; i--) {
        str = str + n[i]
    }
    return str
}
