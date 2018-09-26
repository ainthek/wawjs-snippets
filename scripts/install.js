const { bindNodeCallback, combineLatest } = require("rxjs");

const isInstalled = require("./ide/is-installed");
const ideList = require("./ide-config/ide-list");

const install = combineLatest(
    ideList.filter((ide) => isInstalled.call(ide))
        .map((ide) => ide.install())
);

install.subscribe();