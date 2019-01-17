/* global describe, it */

var mimetype2fa = require('..')
var assert = require('assert')

describe('Mimetype To FontAwesome', function () {
  it('Accept a `prefix` option', function () {
    assert.strict.equal(mimetype2fa('some/mimetype', { prefix: 'fa-' }), 'fa-file-o')
  })

  it('Should results a file by default', function () {
    assert.strict.equal(mimetype2fa('some/mimetype'), 'file-o')
  })

  describe('With default options', function () {
    var convert = mimetype2fa({
      prefix: 'fa-'
    })

    it('Should respect default option prefix', function () {
      assert.strict.equal(convert('some/mimetype'), 'fa-file-o')
    })
  })

  describe('Mimetypes', function () {
    it('mimetype: image/*', function () {
      assert.strict.equal(mimetype2fa('image/jpg'), 'file-image-o')
    })

    it('mimetype: audio/*', function () {
      assert.strict.equal(mimetype2fa('audio/ogg'), 'file-audio-o')
    })

    it('mimetype: video/*', function () {
      assert.strict.equal(mimetype2fa('video/ogg'), 'file-video-o')
    })

    it('mimetype: PDF', function () {
      assert.strict.equal(mimetype2fa('application/pdf'), 'file-pdf-o')
    })

    it('mimetype: Text', function () {
      assert.strict.equal(mimetype2fa('text/plain'), 'file-text-o')
    })

    it('mimetype: Code', function () {
      assert.strict.equal(mimetype2fa('text/html'), 'file-code-o')
      assert.strict.equal(mimetype2fa('text/javascript'), 'file-code-o')
    })

    it('mimetype: Archives', function () {
      assert.strict.equal(mimetype2fa('application/zip'), 'file-archive-o')
      assert.strict.equal(mimetype2fa('application/gzip'), 'file-archive-o')
      assert.strict.equal(mimetype2fa('application/tar'), 'file-archive-o')
      assert.strict.equal(mimetype2fa('application/x-tar'), 'file-archive-o')
      assert.strict.equal(mimetype2fa('application/x-zip'), 'file-archive-o')
      assert.strict.equal(mimetype2fa('application/x-gzip'), 'file-archive-o')
      assert.strict.equal(mimetype2fa('application/x-zip-compressed'), 'file-archive-o')
      assert.strict.equal(mimetype2fa('application/x-7z-compressed'), 'file-archive-o')
      assert.strict.equal(mimetype2fa('application/x-rar-compressed'), 'file-archive-o')
    })

    it('mimetype: Word', function () {
      assert.strict.equal(mimetype2fa('application/msword'), 'file-word-o')
      assert.strict.equal(mimetype2fa('application/ms-word'), 'file-word-o')
      assert.strict.equal(mimetype2fa('application/vnd.openxmlformats-officedocument.wordprocessingml.document'), 'file-word-o')
    })

    it('mimetype: Powerpoint', function () {
      assert.strict.equal(mimetype2fa('application/mspowerpoint'), 'file-powerpoint-o')
      assert.strict.equal(mimetype2fa('application/vnd.ms-powerpoint'), 'file-powerpoint-o')
      assert.strict.equal(mimetype2fa('application/vnd.openxmlformats-officedocument.presentationml.presentation'), 'file-powerpoint-o')
    })

    it('mimetype: Excel', function () {
      assert.strict.equal(mimetype2fa('application/msexcel'), 'file-excel-o')
      assert.strict.equal(mimetype2fa('application/vnd.ms-excel'), 'file-excel-o')
      assert.strict.equal(mimetype2fa('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'), 'file-excel-o')
    })
  })
})
