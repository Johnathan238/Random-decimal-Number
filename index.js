// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function randomFraction() {

  // Only change code below this line
  
  return (Math.random() * (10.00 - 1.00 + 1.00) + 1.00).toFixed(2)

  // Only change code above this line
}

console.log(randomFraction(6))


//////////////Solution//////////////////
// function randomFraction() {
//   // Only change code below this line.
//   var result = 0;
//   // Math.random() can generate 0. We don't want to     return a 0,
//   // so keep generating random numbers until we get one     that isn't 0
//   while (result === 0) {
//     result = Math.random();
//   }

//   return result;
//   // Only change code above this line.
// }