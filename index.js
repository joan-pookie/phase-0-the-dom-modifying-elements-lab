// Remove the <main id="main"> element from the DOM
const main = document.getElementById('main');
main.remove();

// Create a new <h1> element and store it in a variable named newHeader
const newHeader = document.createElement('h1');

// Set the id of the newHeader element to 'victory'
newHeader.id = 'victory';

// Set the text content of newHeader
newHeader.textContent = 'Joan is the champion';

// Append newHeader to the body of the document
document.body.append(newHeader);
