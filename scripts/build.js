const fs = require("fs");
const path = require("path");
const { bindNodeCallback, combineLatest } = require("rxjs");
const { map, flatMap } = require("rxjs/operators");

const isInstalled = require("./ide/is-installed");
const ideList = require("./ide-config/ide-list");

const parseSnippet = require("./snippet/parse");


const readDir = bindNodeCallback(fs.readdir);
const build = readDir("./src/").pipe(
    flatMap((files) =>
        combineLatest(files.map((file) => {
            const readFile = bindNodeCallback(fs.readFile);
            const filePath = path.resolve("./src/", file);

            return readFile(filePath, "UTF-8").pipe(
                map(parseSnippet),
                map((snippet) => ({ filePath, ...snippet }))
            );
        }))
    ),
    flatMap((snippets) =>
        combineLatest(
            ideList.filter((ide) => isInstalled.call(ide))
                .map((ide) => ide.build(snippets))
        )
    )
);

build.subscribe();