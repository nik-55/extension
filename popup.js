const input = document.getElementById("textInput");
const btn = document.getElementById("inputBtn");
const title = document.getElementById("word");

btn.addEventListener("click", async () => {
    try {
        const word = input.value;
        const txt = document.getElementById("txt");
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const data = await response.json();
        const definition = data[0].meanings[0].definitions[0].definition;
        title.innerText = word;
        title.setAttribute("href","./index.html");
        txt.innerText = definition;
        chrome.storage.sync.set({word:JSON.stringify(data)});
    }    catch (err) {
        console.log(err);
    }
});

