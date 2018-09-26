const os = require("os");
const path = require("path");

module.exports = function () {
    if (process.env["ATOM_HOME"])
        return process.env["ATOM_HOME"];

    if (this.osRelative[os.type()])
        return path.resolve(os.homedir(), this.osRelative[os.type()]);

    return null;
};