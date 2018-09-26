const os = require("os");
const path = require("path");

module.exports = function () {
    const envVarName = `${this.key.toUpperCase()}_HOME`;

    if (process.env[envVarName])
        return process.env[envVarName];

    if (this.osRelative[os.type()])
        return path.resolve(os.homedir(), this.osRelative[os.type()]);

    return null;
};