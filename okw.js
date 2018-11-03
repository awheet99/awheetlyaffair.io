/*    My Kitchen Window
 *    Variables and functions
 *    Author: Ann Wheet
 *    Date:   10.28.2018  

 *    Filename: okw.js
 */

// calculate new amount based on original amount and multiplier
function calcAmt() {
   var qty = document.getElementById("origqty").value;
   var mult = document.getElementById("multiplier").value;
   newTotal = qty * mult;
   document.getElementById("estimate").innerHTML = newTotal;

}

// sets all form field values to defaults
function resetForm() {
   document.getElementById("origqty").value = 1;
   document.getElementById("multiplier").value = 1;
   calcAmt();
   createEventListeners();
}

// creates event listeners
function createEventListeners() {
   document.getElementById("origqty").addEventListener("change", calcAmt, false);
   document.getElementById("multiplier").addEventListener("change", calcAmt, false);

}

// resets form when page is reloaded
window.addEventListener("load", resetForm, false);


