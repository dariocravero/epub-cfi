var CFIAssertionError = function (expectedAssertion, targetElementAssertion, message) {

    function CFIAssertionError () {

        this.expectedAssertion = expectedAssertion;
        this.targetElementAssertion = targetElementAssertion;
    }

    CFIAssertionError.prototype = new Error(message);
    CFIAssertionError.constructor = CFIAssertionError();

    return new CFIAssertionError();
};

module.exports = CFIAssertionError
