const path = require("path");

module.exports = function () {
    return path.resolve("./out", this.key);
};