const calc = (a, b) => {
    return a + b;
}

export default {
    calc: calc
};

import module from './module.js';
const calc = module.calc;
console.log(calc(2, 3));

import submodule from './submodule.js';
const subcalc = submodule.subcalc;
const calc = (a, b) => {
    return subcalc(a) + subcalc(b);
}
export default {
    calc: calc
};
