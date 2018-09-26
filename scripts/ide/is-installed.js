const fs = require("fs");
const getHome = require("./get-home");

module.exports = function () {
    return fs.existsSync(getHome.call(this));
};