const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings"); /* checkpoint 1 */

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text) { //3.3 , 3 //
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) { //3.3,  2 //
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() { // 3.3, 1 //
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        // Attention! -> askForName right below's role is: to call this function here, to let user to input in that input box(where placeholder displays)//
        askForName();
    } else { // otherwise, calling paintGreeting function. role is, to remove SHOWING_CN. //
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();