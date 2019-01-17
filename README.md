
# mimetype-to-fontawesome

[![Greenkeeper badge](https://badges.greenkeeper.io/LoicMahieu/mimetype-to-fontawesome.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/LoicMahieu/mimetype-to-fontawesome.svg?branch=master)](https://travis-ci.org/LoicMahieu/mimetype-to-fontawesome)

Convert mimetype to appropriate Font Awesome class name.

## Install

```sh
npm install mimetype-to-fontawesome
```

## Usage

```
var mimetype2fa = require('mimetype-to-fontawesome')({ prefix: 'fa-' })

console.log(mimetype2fa('foo/bar')) // fa-file
console.log(mimetype2fa('image/png')) // fa-file-image
// ... see index.js
```
