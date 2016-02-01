
# mimetype-to-fontawesome

Convert mimetype to appropriate Font Awesome class name.

## Install

```sh
npm install mimetype-to-fontawesome
```

## Usage

```
var mimetype2fa = require('mimetype-to-fontawesome')({ prefix: 'fa-' })

console.log(mimetype2fa('foo/bar')) // fa-file-o
console.log(mimetype2fa('image/png')) // fa-file-image-o
// ... see index.js
```
