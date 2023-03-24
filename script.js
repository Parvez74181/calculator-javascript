let display = document.querySelector("#display");
let sub_display = document.querySelector(".sub-display");
let buttons = document.querySelectorAll("button");

function handleClick(button) {
  if (display.innerText === "0") display.innerText = ""; // first clear the display

  if (button.value === "=") {
    let answer = eval(display.innerText); // getting the naswer by using javascript inbuild method eval
    if (answer.toString().length > 8)
      display.innerText =
        answer.toFixed(
          8
        ); // if answer length is greater then 8 then show only 8 charecters
    else display.innerText = answer; // else display as it is
    return;
  }

  // to clear the hole screen
  if (button.value === "AC") {
    display.innerText = "0";
    return;
  }

  // to remove the last nubmer of the showed value
  if (button.value === "DEL") {
    let value = display.innerText.toString(); // first make number value to String
    let finalValue = value.substring(0, value.length - 1); // now remove the last charecter from the string by substring methode
    display.innerText = finalValue; // and finally show the finalValue to the screen
    if (value.length === 1 || value.length === 0) display.innerText = "0"; // if value length is equal to 0 or 1 then show the '0' to the screen
    return;
  }
  display.innerText += button.value; // this is default setting to show the all value user give it to calculate
}

// calculate values by using button input

buttons.forEach((button) => {
  button.addEventListener("click", () => handleClick(button));
});

// calculate values by using keyboard input
window.addEventListener("keydown", (e) => {
  let key = e.key;
  if (
    key === "1" ||
    key === "2" ||
    key === "3" ||
    key === "4" ||
    key === "5" ||
    key === "6" ||
    key === "7" ||
    key === "8" ||
    key === "9" ||
    key === "0" ||
    key === "." ||
    key === "/" ||
    key === "%" ||
    key === "*" ||
    key === "-" ||
    key === "+" ||
    key === "Enter" ||
    key === "Delete" ||
    key === "Backspace"
  ) {
    if (display.innerText === "0") display.innerText = ""; // first clear the display

    if (key === "Enter") {
      let answer = eval(display.innerText); // getting the naswer by using javascript inbuild method eval
      if (answer.toString().length > 8)
        display.innerText =
          answer.toFixed(
            8
          ); // if answer length is greater then 8 then show only 8 charecters
      else display.innerText = answer; // else display as it is
      return;
    }

    // to clear the hole screen
    if (key === "Delete") {
      display.innerText = "0";
      return;
    }

    // to remove the last nubmer of the showed value
    if (key === "Backspace") {
      let value = display.innerText.toString(); // first make number value to String
      let finalValue = value.substring(0, value.length - 1); // now remove the last charecter from the string by substring methode
      display.innerText = finalValue; // and finally show the finalValue to the screen
      if (value.length === 1 || value.length === 0) display.innerText = "0"; // if value length is equal to 0 or 1 then show the '0' to the screen
      return;
    }
    display.innerText += key; // this is default setting to show the all value user give it to calculate
  }
});
