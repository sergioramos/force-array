'use strict';

module.exports = function concat() {
    return Array.prototype.concat.apply([], arguments);
};
