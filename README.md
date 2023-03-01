# hex-encryption
Hex encryption to encode &amp; decode string

**install:**

```
npm i hex-encryption
```
**usage:**

```
const Hex = require('hex-encryption');

let text = 'ixover 守护村子';
let hex = Hex.encode(text)
console.log(text, '=>', hex)
console.log(hex, '=>', Hex.decode(hex))
```
