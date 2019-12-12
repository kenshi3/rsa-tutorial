let a, d, e, p, q, f, plain

checkPrime = x => {
    let check = bigInt(x).isPrime()
    return check
}

getN = () => {
    let N = 'Make Sure to Use Prime Number',
        pq = ''
    p = document.getElementById('p').value
    q = document.getElementById('q').value
    if (checkPrime(p) && checkPrime(q)) {
        a = (p - 1) * (q - 1)
        f = p * q
        N = 'N | (P.Q) : ' + a
        pq = '(P-1).(Q-1) : ' + f
    }
    document.getElementById('a').innerHTML = N
    document.getElementById('f').innerHTML = pq
}

Euclid_gcd = (a, e) => {
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

getKey = () => {
    let ed = 'Make Sure to Use Prime Number',
        public = '',
        private = ''
    e = document.getElementById('e').value
    if (checkPrime(e)) {
        d = Euclid_gcd(a, e) > 0 ? Euclid_gcd(a, e) : a + Euclid_gcd(a, e)
        ed = e + '.' + d + ' = 1 mod ' + a
        public = 'public = {' + e + ',' + f + '}'
        private = 'private = {' + d + ',' + f + '}'
    }
    document.getElementById('ed').innerHTML = ed
    document.getElementById('public').innerHTML = public
    document.getElementById('private').innerHTML = private
}

encrypt = () => {
    let plainASCII = [],
        cipherASCII = [],
        cipher = []
    plain = document.getElementById('plain').value

    for (let i = 0; i < plain.length; i++) {
        plainASCII.push(plain.charCodeAt(i))
        let temp = bigInt(plainASCII[i])
            .pow(e)
            .mod(f)
        cipherASCII.push(temp)
        cipher.push(String.fromCharCode(cipherASCII[i]))
    }

    document.getElementById('ec').innerHTML = 'Cipher = Plain^' + e + ' mod ' + f

    document.getElementById('plainASCII').innerHTML = plainASCII.join('')
    document.getElementById('cipherASCII').innerHTML = cipherASCII.join('')
    document.getElementById('cipher').innerHTML = cipher.join('')
    decrypt(cipherASCII)
}

decrypt = cipherASCII => {
    let plainASCII_decrypt = [],
        plain_decrypt = []

    for (let i = 0; i < cipherASCII.length; i++) {
        let temp = bigInt(cipherASCII[i])
            .pow(d)
            .mod(f)
        plainASCII_decrypt.push(temp)
        plain_decrypt.push(String.fromCharCode(plainASCII_decrypt[i]))
    }

    document.getElementById('ep').innerHTML = 'Plain = Cipher^' + d + ' mod ' + f

    document.getElementById('cipherASCII2').innerHTML = cipherASCII.join('')
    document.getElementById('plainASCII_decrypt').innerHTML = plainASCII_decrypt.join('')
    document.getElementById('plain_decrypt').innerHTML = plain_decrypt.join('')
}
