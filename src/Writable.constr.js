// Writable - simplified construction
// wawjs - Writable simplified construction
const { Writable } = require("stream");
const myWritable = new Writable({
  write(chunk, enc, cb) {
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
});