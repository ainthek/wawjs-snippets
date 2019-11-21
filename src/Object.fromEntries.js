// fromEntries,Object.fromEntries
// wawjs - oneliner shim for Object.fromEntries

const fromEntries = Object.fromEntries || ((a) => a.reduce((r, [k, v]) => (r[k] = v, r), {}));