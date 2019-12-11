// p, q, e must be prime
let a,
    d,
    e,
    p,
    q,
    f,
    plain,
    plainASCII = []

checkPrime = x => {
    let check = bigInt(x).isPrime()
    console.log(check)
    return check
}

getN = () => {
    p = document.getElementById('p').value
    q = document.getElementById('q').value
    if (checkPrime(p) && checkPrime(q)) {
        a = (p - 1) * (q - 1)
        f = p * q
        console.log(a)
        console.log(f)
        document.getElementById('a').innerHTML = 'N | (p.q) : ' + a
        document.getElementById('f').innerHTML = '(p-1).(q-1) : ' + f
    } else {
        document.getElementById('a').innerHTML = 'Make Sure to Use Prime Number'
        document.getElementById('f').innerHTML = ''
    }
}

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

getD = () => {
    e = document.getElementById('e').value
    if (checkPrime(e)) {
        d = Euclid_gcd(a, e) > 0 ? Euclid_gcd(a, e) : a + Euclid_gcd(a, e)
        document.getElementById('ed').innerHTML = e + '.' + d + ' = 1 mod ' + a
        document.getElementById('public').innerHTML = 'public = {' + e + ',' + f + '}'
        document.getElementById('private').innerHTML = 'private = {' + d + ',' + f + '}'
        console.log(e)
        console.log(d)
        console.log(f)
    } else {
        document.getElementById('ed').innerHTML = 'Make Sure to Use Prime Number'
        document.getElementById('public').innerHTML = ''
        document.getElementById('private').innerHTML = ''
    }
}

encrypt = () => {
    plain = document.getElementById('plain').value

    console.log(plain)

    for (let i = 0; i < plain.length; i++) {
        plainASCII.push(plain.charCodeAt(i))
    }

    console.log(plainASCII.join(''))

    let cipherASCII = []
    for (let i = 0; i < plainASCII.length; i++) {
        let temp = bigInt(plainASCII[i])
            .pow(e)
            .mod(f)
        cipherASCII.push(temp)
    }
    console.log(cipherASCII.join(''))

    let cipher = []
    for (let i = 0; i < cipherASCII.length; i++) {
        cipher.push(String.fromCharCode(cipherASCII[i]))
    }
    console.log(cipher.join(''))

    let plainASCII_decrypt = []
    for (let i = 0; i < cipherASCII.length; i++) {
        let temp = bigInt(cipherASCII[i])
            .pow(d)
            .mod(f)
        plainASCII_decrypt.push(temp)
    }
    console.log(plainASCII_decrypt.join(''))

    let plain_decrypt = []
    for (let i = 0; i < plainASCII_decrypt.length; i++) {
        plain_decrypt.push(String.fromCharCode(plainASCII_decrypt[i]))
    }
    console.log(plain_decrypt.join(''))

    document.getElementById('ec').innerHTML = 'Cipher = Plain^' + e + ' mod ' + f
    document.getElementById('ep').innerHTML = 'Plain = Cipher^' + d + ' mod ' + f

    document.getElementById('plainASCII').innerHTML = plainASCII.join('')
    document.getElementById('cipherASCII').innerHTML = cipherASCII.join('')
    document.getElementById('cipher').innerHTML = cipher.join('')
    document.getElementById('cipherASCII2').innerHTML = cipherASCII.join('')
    document.getElementById('plainASCII_decrypt').innerHTML = plainASCII_decrypt.join('')
    document.getElementById('plain_decrypt').innerHTML = plain_decrypt.join('')
}
