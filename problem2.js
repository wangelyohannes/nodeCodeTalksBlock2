// A callback is a function that is passed as an argument to another function and gets called later in response to an event or condition.
// Callback hell refers to a situation in asynchronous programming where multiple nested callbacks are used, resulting in code that becomes difficult to read and maintain due to excessive indentation and loss of code structure.
// Callback hell occurs when there are multiple nested callbacks in asynchronous code, making it difficult to read, maintain, and debug. It should be avoided because it hampers code readability, error handling, code structure, and overall productivity.

getData(function(data) {
    processFirstData(data, function(result1) {
        processSecondData(result1, function(result2) {
            processThirdData(result2, function(result3) {
                // And so on...
            });
        });
    });
});
