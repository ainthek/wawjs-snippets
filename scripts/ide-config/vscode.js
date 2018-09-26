const fs = require("fs-extra");
const path = require("path");
const season = require("season");

const { bindNodeCallback, of, combineLatest } = require("rxjs");
const { map, flatMap, tap, catchError } = require("rxjs/operators");

const getOutDir = require("./../ide/get-out-dir");
const getHome = require("./../ide/get-home");


const osRelative = {
    Linux: "", // TODO:
    Darwin: "Library/Application Support/Code",
    Windows_NT: "AppData/Roaming/Code"
};

const build = function (snippets) {
    return of(snippets).pipe(
        map((snippets) => {
            return snippets.reduce((snippets, snippet) => {
                const { content, description, tabTrigger } = snippet;
                snippets[description] = { prefix: tabTrigger, body: content };
                return snippets;
            }, {});
        }),
        flatMap((snippets) => {
            const writeFile = bindNodeCallback(season.writeFile.bind(season));
            const INSTALL_FILE = path.resolve(getOutDir.call(this), "javascript.json");

            return writeFile(INSTALL_FILE, snippets);
        }),
        tap(() => {
            console.log('VSCode snippets generated!');
        })
    );
};

const install = function() {
    const INSTALL_FILE = path.resolve(getHome.call(this), "User/snippets/javascript.json");
    const SRC_FILE = path.resolve(getOutDir.call(this), "javascript.json");

    const writeFile = bindNodeCallback(season.writeFile.bind(season));
    const readFile = bindNodeCallback(season.readFile.bind(season));

    return combineLatest(
        readFile(INSTALL_FILE, "UTF-8").pipe(
            catchError(() => {
                return of({});
            })
        ),
        readFile(SRC_FILE, "UTF-8")
    ).pipe(
        flatMap(([dest, src]) => {
            const snippets = { ...dest, ...src };

            return writeFile(INSTALL_FILE, snippets);
        }),
        tap(() => {
            console.log('VSCode snippets installed!');
        })
    );
};

module.exports = {
    key: "vscode",
    osRelative,
    build,
    install
};
