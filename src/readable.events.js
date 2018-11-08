// readable
// wawjs - readable events

readable
  .on("readable", () => {
    // when there is data available to be read
    let chunk;
    // chunk: <Buffer> | <string> | <any>
    while (null !== (chunk = this.read( /*size*/ ))) {
      console.log("read:", chunk);
      //readable.destroy();break;
    }
  })
  .on("data", (chunk) => {
    // whenever stream is relinquishing ownership 
    // of a chunk of data to a consumer
    // chunk: <Buffer> | <string> | <any>
  })
  .on("end", () => {
    // when there is no more data to be consumed
  })
  .on("close", () => {
    // emited when stream and resources closed
    // not all readable emit close
  })
  .on("error", (err) => {
    // may be emitted at any time
    //  underlying internal failure
    //  invalid chunk of data,... 
  });

const { finished } = require("stream");
finished(stream, (err) => {
  // A function to get notified when a stream is 
  // - no longer readable, 
  // - or has experienced an error 
  // - or a premature close event.
});

