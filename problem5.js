// async/await is a modern JavaScript feature that allows you to write asynchronous code in a more synchronous and readable manner.
// async/await is useful because it improves the readability of asynchronous code, simplifies error handling, enables sequential execution, and integrates well with existing asynchronous constructs.
// async/await offers improved code readability, simplified error handling, and sequential execution, but it requires promises and may have limited browser compatibility.

function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() < 0.5;
        if (success) {
          resolve('Data fetched successfully');
        } else {
          reject(new Error('Failed to fetch data'));
        }
      }, 1500);
    });
  }
  
  async function getData() {
    try {
      const result = await fetchData();
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
  }
  
  getData();
