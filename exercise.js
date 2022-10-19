// Starting from the previous exercise, we want to add to our function repeatHello, a clearInterval after 5 seconds, could you do that?

// The callback function must be an arrow function, can you also explain why?

const printHello = () => console.log("Hello");

const repeatHello = (callback) => {
  const helloIntervalId = setInterval(() => callback(), 1000);
  setTimeout(() => clearInterval(helloIntervalId), 5000);
};

repeatHello(printHello);
