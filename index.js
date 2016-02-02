
var mapping = [
  // Images
  [ 'file-image-o', /^image\// ],
  // Audio
  [ 'file-audio-o', /^audio\// ],
  // Video
  [ 'file-video-o', /^video\// ],
  // Documents
  [ 'file-pdf-o', 'application/pdf' ],
  [ 'file-text-o', 'text/plain' ],
  [ 'file-code-o', [
    'text/html',
    'text/javascript'
  ] ],
  // Archives
  [ 'file-archive-o', /^application\/(x-)?g?(zip|tar)$/ ],
  // Word
  [ 'file-word-o', [
    /ms-?word/,
    'application/vnd.oasis.opendocument.text',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ] ],
  // Powerpoint
  [ 'file-powerpoint-o', 'application/mspowerpoint' ],
  // Excel
  [ 'file-excel-o', 'application/msexcel' ],
  // Default, misc
  [ 'file-o' ]
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
  if (typeof mimetype === 'object') {
    options = mimetype
    return function (mimetype) {
      return mimetype2fa(mimetype, options)
    }
  } else {
    var icon = resolve(mimetype)

    if (icon && options && options.prefix) {
      return options.prefix + icon
    } else {
      return icon
    }
  }
}

module.exports = mimetype2fa
