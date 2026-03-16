function clickButtons(words) {

  const buttons = document.querySelectorAll("button, a, span, div");

  buttons.forEach(el => {

    const text = (el.innerText || "").toLowerCase();

    words.forEach(word => {
      if (text.includes(word)) {
        el.click();
        console.log("clicked:", word);
      }
    });

  });

}

function disableToggles() {

  const toggles = document.querySelectorAll(
    'input[type="checkbox"], [role="switch"], [aria-checked]'
  );

  toggles.forEach(toggle => {

    if (toggle.checked === true) {
      toggle.click();
      console.log("checkbox disabled");
      return;
    }

    const aria = toggle.getAttribute("aria-checked");

    if (aria === "true" || aria === "mixed") {
      toggle.click();
      console.log("aria toggle disabled");
    }

  });

}

function runAutomation() {

  clickButtons([
    "more options",
    "manage preferences",
    "manage settings",
    "view all providers",
    "view all vendors"
  ]);

  disableToggles();

}

let tries = 0;

const interval = setInterval(() => {

  runAutomation();
  tries++;

  if (tries > 15) {
    clearInterval(interval);
    console.log("finished");
  }

}, 1000);

//function confirmChoices() {
//
//  const buttons = document.querySelectorAll("button");
//
//  buttons.forEach(btn => {
//
//    const text = btn.innerText.toLowerCase();
//
//    if (text.includes("confirm")) {
//      btn.click();
//      console.log("choices confirmed");
//    }
//
//  });
//
//}