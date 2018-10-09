// readline - file
// wawjs - reading file by lines

// from: https://nodejs.org/api/readline.html#readline_event_line  
const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: fs.createReadStream('sample.txt'),
    crlfDelay: Infinity
});

rl.on('line', (line) => {
	    
});
rl.on('close', () => {
	// The 'close' event is emitted when:
	// input ends,
	// rl.close() is called 
	// <ctrl>-D EOT, 
	// <ctrl>-C SIGINT 
});

