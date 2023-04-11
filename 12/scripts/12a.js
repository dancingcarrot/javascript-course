

const add = function() {
    console.log(2+3);
};
add();
add();

function runTwice(fun) {
    fun();
    fun();
}

runTwice(function() {
    console.log(`12b`);
})

runTwice(add);

function updateButton() {
    const button = document.querySelector(`.js-button`);

    button.innerHTML = `Loading...`;
    setTimeout(function() {
        button.innerHTML = `Finished!`;
    },1000);
}

    let timeoutId;

function displayMessage() {
    const messageElement = document.querySelector(`.js-message`);
    messageElement.innerHTML = `Added`;

    clearTimeout(timeoutId);

    timeoutId = setTimeout(function() {
        messageElement.innerHTML=``;
    },2000);
}