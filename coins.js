console.log("ahoy mate!")
// Write a program that will convert a dollar amount to the number of coins that make up the amount. Use the common American coins of quarters, dimes, nickels, and pennies.
  // Input: 0.67
  // Output:
  // {
  //   quarters: 2,
  //   dimes: 1,
  //   nickels: 1,
  //   pennies: 2
  // }
var dollarAmountDOM = document.getElementById("dollarAmountDOM");
var countBtnDOM = document.getElementById("countBtn");
// countBtnDOM.target.addEventListener("click", countBtn);
function coinCounter (money) {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};
  coinPurse.quarters = 0;
  coinPurse.dimes = 0;
  coinPurse.nickels = 0;
  coinPurse.pennies = 0;
	return coinPurse;
};

var coins = coinCounter()
console.log("coins", coins);
