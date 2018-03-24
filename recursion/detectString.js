
const detectString = (element, cb) => {
    if(Array.isArray(element)) element.forEach(e => detectString(e, cb));
    else if (typeof element === 'object') Object.keys(element).forEach(e => detectString(element[e], cb));
    else cb(element);
};

let aa = [{
    aa: "ddddd"
}, {
    bb: ["vvv", '999']
}];
detectString(aa, e=>console.log(e))