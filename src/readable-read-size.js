// read size
// wawjs - read only first SIZE bytes of stream and destroy

stream.on("readable", function() {
  let SIZE = 1024;
  let chunk;
  // if size bytes are not available to be read, 
  // null will be returned
  while (null != (chunk = stream.read(SIZE))) {
    if (chunk.length === SIZE) {
      // expected SIZE chunk
    } else {
      // this can happen
      // the stream has ended, in which case all 
      // of the data remaining in the internal buffer will be returned.
    }
    stream.destroy();
    break;
  }
});
// you may want to register finished handler
// since end is not emited and close is not supported by all
const { finished } = require("stream");
finished(stream, (err) => {

});