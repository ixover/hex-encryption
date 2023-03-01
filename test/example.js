const Hex = require('../');

let text = 'ixover 守护村子';
let hex = Hex.encode(text)
console.log(text, '=>', hex)
console.log(hex, '=>', Hex.decode(hex))