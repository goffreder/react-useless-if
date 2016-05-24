module.exports = function uselessIf(type, condition) {
    return function(props, propName, componentName) {
        if (props[propName] !== undefined && condition(props)) {
            return new Error('Useless prop `' + propName + '` supplied to `' + componentName + '`.');
        }

        return type.apply(this, arguments);
    };
};
