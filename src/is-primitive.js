// isPrimitive
// wawjs - oneline function

const isPrimitive = (v) => (typeof v !== 'object' && typeof v !== 'function') || v === null;

