// Writable class
// wawjs - Writable class
const { Writable } = require("stream");

class MyWritable extends Writable {
  constructor(options) {

  }

  _write(chunk, enc, cb) {
    //0) chunk can be Buffer|string|any
    // assert or convert 
    //a) write data somewhere 
    this.resource += chunk;
    //b) when procesing done
    cb();
    //c) when processing fails 
    cb(new Error(".."));
    //d) don't not call
    //   or delay cb()
  }
}