
function capitalizeFirstLetters(str) {
    if (typeof str !== 'string') return ''
    return str.split(' ').map(word => word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
}



const assert = require('assert');

assert.strictEqual(typeof capitalizeFirstLetters, 'function');
assert.strictEqual(capitalizeFirstLetters.length, 1);
assert.strictEqual(capitalizeFirstLetters('i am learning TDD'), 'I Am Learning TDD');
assert.strictEqual(capitalizeFirstLetters('z'), 'Z');
assert.strictEqual(capitalizeFirstLetters(''), '');
