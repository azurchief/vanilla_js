const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings"); /* checkpoint 1 */

    // DO NOT GET CONFUSED - USER_LS is class name //
const USER_LS = "currentUser", // currentUser is class name & means same as USER_LS, to let it work here in JavaScript //
    SHOWING_CN = "showing"; // "showing" class does exist on css file. //

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
        // summary : she is not //
        askForName();
        // otherwise, calling paintGreeting function. role is, to remove SHOWING_CN. //
        // summary: she is //
    } else {
        paintGreeting(currentUser); 
        // 해석: because currentUser is null(nothing, no value is present, but if currentUser has some new value given by input, then paintGreeting(currentUser) works!)
    }
}

function init() {
    loadName();
}

init();