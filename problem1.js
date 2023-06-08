// A promise is a JavaScript object representing the outcome of an asynchronous operation, allowing you to handle success or failure in a structured manner.
// Promises are used to streamline asynchronous operations in JavaScript, providing a more organized approach to handling asynchronous code.
// Promises offer improved code readability, error handling, and method chaining, but require newer browser support, add complexity, lack cancellation, and can make debugging more challenging.

function fetchData() {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous operation (e.g., API call) with setTimeout
      setTimeout(() => {
        const data = { id: 1, name: 'John Doe' };
        resolve(data); // Resolving the promise with the data
      }, 2000);
    });
  }
  
  fetchData()
    .then((data) => {
      console.log('Fetched data:', data);
    })
    .catch((error) => {
      console.log('Error:', error);
    });
  