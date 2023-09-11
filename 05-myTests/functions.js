function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

function sortArray(arr) {
  return arr.sort((a, b) => a - b);
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}



function formatDate(date) {
  if (!(date instanceof Date)) {
    throw new Error("Invalid Date");
  }

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  if (
    isNaN(year) ||
    isNaN(month) ||
    isNaN(day) ||
    year < 0 ||
    month < 0 ||
    month > 11 || 
    day < 1 ||
    day > 31
  ) {
    throw new Error("Invalid Date");
  }

  const options = { year: "numeric", month: "short", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

const ko = new Date(32, 3, 2023);
console.log(formatDate(ko));


function callbacks(message){
    console.log(message)

}
function fetchData(callback) {
    setTimeout(() => {
      callback('Data fetched successfully');
    }, 1000);
  }

//   function fetchDataPromise() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Data fetched successfully');
//     }, 1000);
//   });
// }


module.exports = {
  add: add,
  subtract: subtract,
  divide: divide,
  reverseString: reverseString,
  sortArray: sortArray,
  isValidEmail: isValidEmail,
  formatDate: formatDate,
  fetchData: fetchData
};
