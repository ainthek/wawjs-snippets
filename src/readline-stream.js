// readline - stream
// wawjs - create line stream 

//    using byline because node v10.3.0 readline module 
//    has no stream interface  
const fs = require("fs");
const { LineStream } = require('byline');

fs.createReadStream(file, { encoding: "utf8" })
  .pipe(new LineStream())