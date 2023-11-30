##Name = dheeraj mathur##

1. Calculate subtotal price of quantity in JavaScript?
To calculate the subtotal price based on quantity, you can multiply the quantity by the price per item. Here's an example:

```javascript
const quantity = 2;
const pricePerItem = 29;
const subtotal = quantity * pricePerItem;
console.log("Subtotal:", subtotal);
```

2. What is JavaScript Output method?
JavaScript provides several methods to output information to the user. The most commonly used methods are:
- `console.log()`: Outputs messages to the browser console.
- `alert()`: Displays an alert box with a message.
- `document.write()`: Writes HTML content directly to the document.
- `innerHTML`: Sets the HTML content of an element.

3. How to use JavaScript Output method?
You can use JavaScript output methods like `console.log()`, `alert()`, `document.write()`, or by manipulating the `innerHTML` property of an HTML element. Here are a few examples:

Using `console.log()`:
```javascript
console.log("This is a console.log() message");
```

Using `alert()`:
```javascript
alert("This is an alert message");
```

Using `document.write()`:
```javascript
document.write("This is a document.write() message");
```

Using `innerHTML`:
```javascript
document.getElementById("output").innerHTML = "This is an innerHTML message";
```

4. How to use JavaScript Events to do all examples?
In JavaScript, you can use event handlers to respond to user actions. Here's an example of how you can use an event handler to execute a function when a button is clicked:

```html
<button onclick="myFunction()">Click me</button>

<script>
function myFunction() {
  console.log("Button clicked");
}
</script>
```

This will log "Button clicked" to the browser console when the button is clicked. You can similarly attach event handlers to other HTML elements and perform different actions based on the events triggered.
