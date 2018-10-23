// Writable noop
// wawjs - Writable doing nothing

new Writable({ write(chunk, enc, cb) { cb(); } })