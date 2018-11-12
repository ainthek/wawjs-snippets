// writable events
// wawjs - writable events

writable
    .on("close", () => {
    	// when the stream and any of its underlying resources 
    	// (a file descriptor, for example) have been closed. 
    	// The event indicates that no more events will be emitted, 
    	// and no further computation will occur.
    })
    .on("drain", () => {
    	// If a call to stream.write(chunk) returns false, 
    	// the 'drain' event will be emitted 
    	// when it is appropriate to resume writing data to the stream.
    })
    .on("error", (err) => {
    	// emitted if an error occurred while writing or piping data.
    })
    .on("finish", () => {
    	// emitted after the stream.end() method has been called, 
    	// and all data has been flushed to the underlying system.
    })
    .on("pipe", (src) => {
    	// emitted when the src.pipe(this) is called on a readable stream, 
    	// adding this writable to its set of destinations.
    })
    .on("unpipe", (src) => {
    	// emitted when the src.unpipe(this) is called on a readable stream, 
    	// removing this writable from its set of destinations.
 
    })