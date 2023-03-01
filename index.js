module.exports = {
    encode(str = '') {
        return (Buffer) && Buffer.from(str).toString('hex') || str.split('').map(c=>c.charCodeAt(0)<128?c.charCodeAt(0).toString(16):encodeURIComponent(c).replace(/\%/g, '').toLowerCase()).join('')
    },
    decode(hex = '') {
        return (Buffer) && Buffer.from(hex, 'hex').toString() || decodeURIComponent('%' + hex.match(/.{2}/g).join('%'))
    }
}