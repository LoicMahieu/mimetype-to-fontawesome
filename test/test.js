/* global describe, it */

const mimetype2fa = require('..')
const assert = require('assert')

describe('Mimetype To FontAwesome', function () {
  it('Accept a `prefix` option', function () {
    assert.strict.equal(mimetype2fa('some/mimetype', { prefix: 'fa-' }), 'fa-file')
  })

  it('Should results a file by default', function () {
    assert.strict.equal(mimetype2fa('some/mimetype'), 'file')
  })

  describe('With default options', function () {
    const convert = mimetype2fa({
      prefix: 'fa-'
    })

    it('Should respect default option prefix', function () {
      assert.strict.equal(convert('some/mimetype'), 'fa-file')
    })
  })

  describe('Version 4', function () {
    it('Should use Version 4 format', function () {
      assert.strict.equal(mimetype2fa('some/mimetype', { version: 4 }), 'file-o')
    })
  })

  describe('Mimetypes', function () {
    it('mimetype: image/*', function () {
      assert.strict.equal(mimetype2fa('image/jpg'), 'file-image')
    })

    it('mimetype: audio/*', function () {
      assert.strict.equal(mimetype2fa('audio/ogg'), 'file-audio')
    })

    it('mimetype: video/*', function () {
      assert.strict.equal(mimetype2fa('video/ogg'), 'file-video')
    })

    it('mimetype: PDF', function () {
      assert.strict.equal(mimetype2fa('application/pdf'), 'file-pdf')
    })

    it('mimetype: Text', function () {
      assert.strict.equal(mimetype2fa('text/plain'), 'file-alt')
    })

    it('mimetype: Code', function () {
      assert.strict.equal(mimetype2fa('text/html'), 'file-code')
      assert.strict.equal(mimetype2fa('text/javascript'), 'file-code')
    })

    it('mimetype: Archives', function () {
      assert.strict.equal(mimetype2fa('application/zip'), 'file-archive')
      assert.strict.equal(mimetype2fa('application/gzip'), 'file-archive')
      assert.strict.equal(mimetype2fa('application/tar'), 'file-archive')
      assert.strict.equal(mimetype2fa('application/x-tar'), 'file-archive')
      assert.strict.equal(mimetype2fa('application/x-zip'), 'file-archive')
      assert.strict.equal(mimetype2fa('application/x-gzip'), 'file-archive')
      assert.strict.equal(mimetype2fa('application/x-zip-compressed'), 'file-archive')
      assert.strict.equal(mimetype2fa('application/x-7z-compressed'), 'file-archive')
      assert.strict.equal(mimetype2fa('application/x-rar-compressed'), 'file-archive')
    })

    it('mimetype: Word', function () {
      assert.strict.equal(mimetype2fa('application/msword'), 'file-word')
      assert.strict.equal(mimetype2fa('application/ms-word'), 'file-word')
      assert.strict.equal(mimetype2fa('application/vnd.openxmlformats-officedocument.wordprocessingml.document'), 'file-word')
    })

    it('mimetype: Powerpoint', function () {
      assert.strict.equal(mimetype2fa('application/mspowerpoint'), 'file-powerpoint')
      assert.strict.equal(mimetype2fa('application/vnd.ms-powerpoint'), 'file-powerpoint')
      assert.strict.equal(mimetype2fa('application/vnd.openxmlformats-officedocument.presentationml.presentation'), 'file-powerpoint')
    })

    it('mimetype: Excel', function () {
      assert.strict.equal(mimetype2fa('application/msexcel'), 'file-excel')
      assert.strict.equal(mimetype2fa('application/vnd.ms-excel'), 'file-excel')
      assert.strict.equal(mimetype2fa('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'), 'file-excel')
    })
  })
})
