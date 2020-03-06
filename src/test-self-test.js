// test,SELF_TEST
// wawjs - include tests inside module code 

/* eslint-disable no-process-env, no-console */
process.env.SELF_TEST && (() => { 
  console.error(`[self test]:${__filename}:...`)
  const assert = require("assert");



  console.error(`[self test]:${__filename}:OK`)
})();
/* eslint-enable no-process-env, no-console */

