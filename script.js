let data;

const startBtn = document.getElementById("start");
const main = document.getElementById("main");

const userAction = async () => {
    const response = await fetch("https://api.kanye.rest/");
    const myJson = await response.json();

    data = myJson.quote;
    updateDOM();
};

function updateDOM(providedData = data) {
    main.innerHTML = "<h2></h2>";

    const element = document.createElement("div");
    element.innerHTML = `"${providedData}"`;
    main.appendChild(element);
}
startBtn.addEventListener("click", userAction);
