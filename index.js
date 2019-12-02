// p, q, e must be prime
let a,
    d,
    e = 17,
    p = 61,
    q = 53,
    f,
    plain = 'Hello World!',
    plainASCII = [],
    cipher

a = (p - 1) * (q - 1)
f = p * q

Euclid_gcd = (a, e) => {
    // a = +a
    // e = +e

    let signX = a < 0 ? -1 : 1,
        signY = e < 0 ? -1 : 1,
        x = 0,
        y = 1,
        u = 1,
        v = 0,
        q,
        r,
        m,
        n

    while (a !== 0) {
        q = Math.floor(e / a)
        r = e % a
        m = x - u * q
        n = y - v * q
        e = a
        a = r
        x = u
        y = v
        u = m
        v = n
    }
    return signY * y
}

d = Euclid_gcd(a, e) > 0 ? Euclid_gcd(a, e) : a + Euclid_gcd(a, e)

console.log(e)
console.log(d)
console.log(f)

console.log(plain)

for (let i = 0; i < plain.length; i++) {
    plainASCII.push(plain.charCodeAt(i))
}
console.log(plainASCII.join(''))

for (let i = 0; i < plainASCII.length; i++) {
    let x = bigInt(plainASCII[i])
        .pow(e)
        .mod(f)
    plainASCII[i] = x
}
console.log(plainASCII.join(''))

let test = []
for (let i = 0; i < plainASCII.length; i++) {
    test.push(String.fromCharCode(plainASCII[i]))
}
console.log(test.join(''))

for (let i = 0; i < plainASCII.length; i++) {
    let y = bigInt(plainASCII[i])
        .pow(d)
        .mod(f)
    plainASCII[i] = y
}
console.log(plainASCII.join(''))

for (let i = 0; i < plainASCII.length; i++) {
    plainASCII[i] = String.fromCharCode(plainASCII[i])
}
console.log(plainASCII.join(''))
