// Starting from the previous exercise, we want to add to our function repeatHello, a clearInterval after 5 seconds, could you do that?

// The callback function must be an arrow function, can you also explain why?
// The only good reason I found is that the arrow function doesn't have its binding to the "this" keyword,
// so it is easy to access the lexical scope of the parent function, which is ideally good because
// when you pass functions you don't want them to take something/data with them.
// you just want to send it in a clear classic fashion way.

const printHello = () => console.log("Hello");

const repeatHello = (callback) => {
  const helloIntervalId = setInterval(() => callback(), 1000);
  setTimeout(() => clearInterval(helloIntervalId), 5000);
};

repeatHello(printHello);
