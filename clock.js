const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

    function getTime() {
        const date = new Date();
        const minutes = date.getMinutes();
        const hours = date.getHours();
        const seconds = date.getSeconds();
        clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
            minutes < 10 ? ` 0${minutes}` : minutes
        }:${seconds < 10 ? `0${seconds}` : seconds}`;
    }
    /* must put ? mark. Otherwise, it will be 00:00. */
    /* note: ? may indicates literally 'question' regard to the function and object I made. */

    function init() {
        getTime();
        setInterval(getTime, 1000);
    }

    init();