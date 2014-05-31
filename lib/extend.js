'use strict';

var __slice = [].slice,
    copy = function (target, source, key) {
        target[key] = source[key];
    };

module.exports = function () {
    var target = arguments[0],
        sources = __slice.call(arguments, 1),
        i,
        source;

    for (i = 0; i < sources.length; ++i) {
        source = sources[i];
        Object.keys(source).forEach(copy.bind(null, target, source));
    }
    return target;
};
