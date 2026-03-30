// ==========================
// Part 1: Date Display
// ==========================

// Create a new Date object for the current date
var today = new Date();

// Get the month (0-based, so add 1), day, and full year
var month = today.getMonth() + 1;
var day = today.getDate();
var year = today.getFullYear();

// Pad month and day with a leading zero if they are single digits
var formattedMonth = month < 10 ? "0" + month : String(month);
var formattedDay = day < 10 ? "0" + day : String(day);

// Build the date string in MM/DD/YYYY format
var dateString = "Today is " + formattedMonth + "/" + formattedDay + "/" + year;

// Display the result in the dateOutput element
document.getElementById("dateOutput").textContent = dateString;


// ==========================
// Part 2: Number Conversion
// ==========================

// Define four variables: two numeric strings, one decimal string, one non-numeric string
var val1 = "42";
var val2 = "100";
var val3 = "19.75";
var val4 = "hello";

// Convert each value using Number()
var converted1 = Number(val1);
var converted2 = Number(val2);
var converted3 = Number(val3);
var converted4 = Number(val4);

// Check isNaN and isInteger for each converted value
var isNaN1 = Number.isNaN(converted1);
var isNaN2 = Number.isNaN(converted2);
var isNaN3 = Number.isNaN(converted3);
var isNaN4 = Number.isNaN(converted4);

var isInt1 = Number.isInteger(converted1);
var isInt2 = Number.isInteger(converted2);
var isInt3 = Number.isInteger(converted3);
var isInt4 = Number.isInteger(converted4);

// Build result strings for each value
var result1 = "Original: '" + val1 + "' → Converted: " + converted1 + " → isNaN: " + isNaN1 + " → isInteger: " + isInt1;
var result2 = "Original: '" + val2 + "' → Converted: " + converted2 + " → isNaN: " + isNaN2 + " → isInteger: " + isInt2;
var result3 = "Original: '" + val3 + "' → Converted: " + converted3 + " → isNaN: " + isNaN3 + " → isInteger: " + isInt3;
var result4 = "Original: '" + val4 + "' → Converted: " + converted4 + " → isNaN: " + isNaN4 + " → isInteger: " + isInt4;

// Combine all results into one HTML string
var conversionHTML = "<p>" + result1 + "</p>" +
                     "<p>" + result2 + "</p>" +
                     "<p>" + result3 + "</p>" +
                     "<p>" + result4 + "</p>";

// Display the combined result in the numberConversionOutput element
document.getElementById("numberConversionOutput").innerHTML = conversionHTML;


// ==========================
// Part 3: Math & Formatting
// ==========================

// Define item price, tax rate, and shipping cost for a price calculator
var itemPrice = 49.99;
var taxRate = 0.08;
var shippingCost = 5.95;

// Calculate subtotal (price + shipping), tax amount, and total
var subtotal = itemPrice + shippingCost;
var taxAmount = itemPrice * taxRate;
var totalCost = subtotal + taxAmount;

// Format the total cost to two decimal places using toFixed()
var formattedTotal = totalCost.toFixed(2);

// Format the total with toLocaleString for currency display
var localTotal = totalCost.toLocaleString("en-US", { style: "currency", currency: "USD" });

// Parse the item price as a float to demonstrate Number.parseFloat()
var parsedPrice = Number.parseFloat(itemPrice.toFixed(2));

// Build the math results HTML
var mathHTML = "<p>Item Price: $" + itemPrice.toFixed(2) + "</p>" +
               "<p>Tax Rate: " + (taxRate * 100) + "%</p>" +
               "<p>Shipping Cost: $" + shippingCost.toFixed(2) + "</p>" +
               "<p>Subtotal (price + shipping): $" + subtotal.toFixed(2) + "</p>" +
               "<p>Tax Amount: $" + taxAmount.toFixed(2) + "</p>" +
               "<p>Total Cost (toFixed): $" + formattedTotal + "</p>" +
               "<p>Total Cost (toLocaleString): " + localTotal + "</p>" +
               "<p>Parsed Item Price (parseFloat): " + parsedPrice + "</p>";

// Display math results on the page
document.getElementById("mathOutput").innerHTML = mathHTML;


// ==========================
// Part 4: Conditionals
// ==========================

var conditionalMessages = "";

// Conditional 1: Check if val4 ("hello") produced NaN after conversion
if (Number.isNaN(converted4)) {
    conditionalMessages += "<p>'" + val4 + "' is not a valid number (NaN).</p>";
} else {
    conditionalMessages += "<p>'" + val4 + "' converted to a valid number: " + converted4 + "</p>";
}

// Conditional 2: Check if val3 ("19.75") is an integer or a decimal
if (Number.isInteger(converted3)) {
    conditionalMessages += "<p>'" + val3 + "' converted to an integer: " + converted3 + "</p>";
} else {
    conditionalMessages += "<p>'" + val3 + "' is not an integer; it is a decimal value: " + converted3 + "</p>";
}

// Conditional 3: Check if the total cost is over $50
if (totalCost > 50) {
    conditionalMessages += "<p>Total cost (" + localTotal + ") is over $50.00.</p>";
} else {
    conditionalMessages += "<p>Total cost (" + localTotal + ") is $50.00 or less.</p>";
}

// Display conditional messages on the page
document.getElementById("conditionalOutput").innerHTML = conditionalMessages;


// ==========================
// Extra Credit: typeof
// ==========================

// five different values with different types
var typeVal1 = 42;
var typeVal2 = "hello";
var typeVal3 = true;
var typeVal4 = undefined;
var typeVal5 = { name: "Nick" };

// check the type of each one using typeof
var typeofHTML = "<p>'42' (number literal) → typeof: " + typeof typeVal1 + "</p>" +
                 "<p>'hello' (text) → typeof: " + typeof typeVal2 + "</p>" +
                 "<p>'true' (boolean) → typeof: " + typeof typeVal3 + "</p>" +
                 "<p>undefined → typeof: " + typeof typeVal4 + "</p>" +
                 "<p>{ name: 'Nick' } (object) → typeof: " + typeof typeVal5 + "</p>";

// show the results on the page
document.getElementById("typeofOutput").innerHTML = typeofHTML;
