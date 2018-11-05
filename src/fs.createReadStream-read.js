// createReadStream
// wawjs - reading TEXT file as stream - pull

const fs = require("fs");
let input = fs.createReadStream(file, { encoding: "utf8" });
input
  .on("readable", function() {
    let chunk;
    while (null !== (chunk = this.read())) {
      console.log("read:", chunk);
    }
  })
  .on("end", () => {
    // when there is no more data to be consumed
    console.log("end")
  })
  .on("close", () => {
    // emited when stream and resources closed
    // not all readable emit close
    console.log("close")
  })
  .on("error", (err) => {
    // may be emitted at any time
    //  underlying internal failure
    //  invalid chunk of data,... 
    console.log("error", err);
  })