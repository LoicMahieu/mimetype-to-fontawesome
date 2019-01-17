
var mapping = [
  // Images
  [ 'file-image', /^image\// ],
  // Audio
  [ 'file-audio', /^audio\// ],
  // Video
  [ 'file-video', /^video\// ],
  // Documents
  [ 'file-pdf', 'application/pdf' ],
  [ 'file-text', 'text/plain' ],
  [ 'file-code', [
    'text/html',
    'text/javascript'
  ] ],
  // Archives
  [ 'file-archive', [
    /^application\/x-(g?tar|xz|compress|bzip2|g?zip)$/,
    /^application\/x-(7z|rar|zip)-compressed$/,
    /^application\/(zip|gzip|tar)$/
  ] ],
  // Word
  [ 'file-word', [
    /ms-?word/,
    'application/vnd.oasis.opendocument.text',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ] ],
  // Powerpoint
  [ 'file-powerpoint', [
    /ms-?powerpoint/,
    'application/vnd.openxmlformats-officedocument.presentationml.presentation'
  ] ],
  // Excel
  [ 'file-excel', [
    /ms-?excel/,
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  ] ],
  // Default, misc
  [ 'file' ]
]

function match (mimetype, cond) {
  if (Array.isArray(cond)) {
    return cond.reduce(function (v, c) {
      return v || match(mimetype, c)
    }, false)
  } else if (cond instanceof RegExp) {
    return cond.test(mimetype)
  } else if (cond === undefined) {
    return true
  } else {
    return mimetype === cond
  }
}

var cache = {}

function resolve (mimetype) {
  if (cache[mimetype]) {
    return cache[mimetype]
  }

  for (var i = 0; i < mapping.length; i++) {
    if (match(mimetype, mapping[i][1])) {
      cache[mimetype] = mapping[i][0]
      return mapping[i][0]
    }
  }
}

function mimetype2fa (mimetype, options) {
  options = Object.assign({ version: 5 }, options)
  if (typeof mimetype === 'object') {
    options = Object.assign(options, mimetype)
    return function (mimetype) {
      return mimetype2fa(mimetype, options)
    }
  } else {
    var icon = resolve(mimetype)

    if (icon && options.prefix) {
      icon = options.prefix + icon
    }
    if (icon && options.version < 5) {
      icon = icon + '-o'
    }
    return icon
  }
}

module.exports = mimetype2fa
