/**
 * test function
 * @param {string} desc
 * @param {function} fn
 * @example
 * // assert is builtin to Node.js https://nodejs.org/api/assert.html
 * it('should fail because true isnt false', () => {
 *   assert.equal(true, false);
 * });
 */
function it(desc, fn) {
    try {
        fn();
        console.log('\x1b[32m%s\x1b[0m', '\u2714 ' + desc);
    } catch (error) {
        console.log('\n');
        console.log('\x1b[31m%s\x1b[0m', '\u2718 ' + desc);
        console.error(error);
    }
}

function xit(desc) {
    console.log('skipping: ' + desc);
}

module.exports = { it, xit };
