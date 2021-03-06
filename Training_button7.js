// Training_button.js

// Press button to cycle through the LED

// keep track of the next LED
var next_LED = 1;
// keep track of the ID, see later
var timeout_ID;
function swap() {
  // remove the timeout to turn of all LEDs when the user pressed the button
  if (timeout_ID !== undefined) {
    clearTimeout(timeout_ID);
  }
  // determine which LED to turn on/off
  switch(next_LED) {
    case 1:
      LED1.write(1);
      LED2.write(0);
      LED3.write(0);
      break;
    case 2:
      LED1.write(0);
      LED2.write(1);
      LED3.write(0);
      break;
    case 3:
      LED1.write(0);
      LED2.write(0);
      LED3.write(1);
    case 4:
      LED1.write(1);
      LED2.write(1);
      LED3.write(0);
    case 5:
      LED1.write(1);
      LED2.write(0);
      LED3.write(1);
    case 6:
      LED1.write(0);
      LED2.write(1);
      LED3.write(1);
    case 7:
      LED1.write(1);
      LED2.write(1);
      LED3.write(1);
      break;
  }
  // determine the next LED to turn on
  next_LED = Math.wrap(next_LED, 7) + 1;
  // prepare a timeout to turn off all LEDs after a while
  // we capture the ID here, so that we can use it in a next call to this function
  timeout_ID = setTimeout(function () { LED1.write(0); LED2.write(0); LED3.write(0); timeout_ID = undefined; }, 5000);
}

setWatch(swap, BTN1, {repeat:true, edge:"rising"});