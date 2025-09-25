// help,arguments,args
// wawjs - trivial arg check and help

/*

## Short purpose
##
## Version: 
##
## Usage: 
##
## Samples:
##    

*/

if (process.argv[2] === '-h' || process.argv[2] === '--help' || (process.stdin.isTTY && process.argv.length === 2)) {
  console.log(
    require('fs').readFileSync(__filename, 'utf8')
      .match(/^## ?.*/gm)
      .map(line => line.replace(/^## ?/, ''))
      .join('\n')
  );
  process.exit(1);
}

