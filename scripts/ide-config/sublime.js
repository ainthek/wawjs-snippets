const fs = require("fs");
const path = require("path");
const mkdirp = require('mkdirp');

const { bindNodeCallback, combineLatest } = require("rxjs");
const { tap, flatMap, concat } = require("rxjs/operators");

const getOutDir = require("./../ide/get-out-dir");
const getHome = require("./../ide/get-home");


const osRelative = {
    Linux: ".config/sublime-text-3/",
    Darwin: "Library/Application Support/Sublime Text 3/",
    Windows_NT: "AppData/Roaming/Sublime Text 3/"
};

const build = function (snippets) {
    return combineLatest(
        snippets.map((snippet) => {
            const { tabTrigger, description, content, filePath } = snippet;
            const writeFile = bindNodeCallback(fs.writeFile);
            const to = path.resolve(getOutDir.call(this), path.basename(filePath, ".js") + ".sublime-snippet");

            let xmlData = `<snippet>
                <tabTrigger>${tabTrigger}</tabTrigger>
                <scope>source.js</scope>
                <description>${description}</description>
                <content><![CDATA[${content}]]></content>
            \r</snippet>`;

            return writeFile(to, xmlData);
        })
    ).pipe(
        tap(() => {
            console.log('Sublime snippets generated!');
        })
    );
};

const install = function () {
    const INSTALL_DIR = path.resolve(getHome.call(this), "Packages/User/wawjs/");
    const SRC_DIR = getOutDir.call(this);

    const readDir = bindNodeCallback(fs.readdir);
    const copyFile = bindNodeCallback(fs.copyFile);

    const mkDirP = bindNodeCallback(mkdirp);

    return mkDirP(INSTALL_DIR).pipe(concat(
        readDir(SRC_DIR).pipe(
            flatMap((files) => {
                return combineLatest(files.filter((file) => path.extname(file) === ".sublime-snippet").map((file) => {
                   return copyFile(path.resolve(SRC_DIR, file), path.resolve(INSTALL_DIR, file));
                }));
            }),
            tap(() => {
                console.log('Sublime snippets installed!');
            })
        )
    ));
};

module.exports = {
    key: "sublime",
    osRelative,
    build,
    install
};
