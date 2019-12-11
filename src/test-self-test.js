// test,SELF_TEST
// wawjs - include tests inside module code 

process.env.SELF_TEST && (() => {
  console.error(`[self test]:${__filename}:...`)
  const assert = require("assert");



  console.error(`[self test]:${__filename}:OK`)
})();

