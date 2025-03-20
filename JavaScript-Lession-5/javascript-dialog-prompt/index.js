// ? Now we learn JavaScript default dialog boxes.

// ? Let's try to the prompt() how is it work ------------------------------------>
// prompt('What is your name?');

// ? Now we see the power of confirm() dialog.
const name = prompt('Enter your name:');
console.log(name);

// ! note:
// ? prompt can store the user input values. when the user Enter a value and click "OK" → The entered value is returned as a string. Click "OK" without entering anything → An empty string ("") is returned. Click "Cancel" or press the Esc key → null is returned.

// ? Why Does It Print null When Clicking "Cancel"? When the user clicks "Cancel," the prompt() function returns null, indicating that no input was provided and the prompt was dismissed.