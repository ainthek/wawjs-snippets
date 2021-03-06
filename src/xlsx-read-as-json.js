// xlsx read as json
// wawjs - reading XLSX data as JSON (asyn version)

const path = require('path');
const fs = require('fs').promises;
const XLSX = require("xlsx");

async function xlsxAsJson(xlsxFileName, sheetName) {
  // https://www.npmjs.com/package/xlsx
  const data = await fs.readFile(xlsxFileName);
  const sheet = XLSX.read(data, {
    //options
  }).Sheets[sheetName];
  return XLSX.utils.sheet_to_json(sheet, {
    raw: false //all as strings
  });
}

const data = await xlsxAsJson(path.resolve(__dirname, "TODO:"), "TODO:");
//console.error(data);