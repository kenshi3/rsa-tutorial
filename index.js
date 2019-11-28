// p, q, e must be prime
let a,
    d,
    e = 7,
    p = 11,
    q = 17,
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

console.log(d)

for (let i = 0; i < plain.length; i++) {
    plainASCII.push(plain.charCodeAt(i))
}

console.log(plainASCII.join(''))
