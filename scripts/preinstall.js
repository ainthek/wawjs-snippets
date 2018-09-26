const isInstalled = require("./ide/is-installed");
const ideList = require("./ide-config/ide-list");

const ideInstalled = Object.values(ideList).filter((ide) => isInstalled.call(ide)).length > 0;

if (!ideInstalled) {
    throw new Error(`Please install one of the supported IDEs. For more information read README.md.`);
}