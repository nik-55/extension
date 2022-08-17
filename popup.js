const input = document.getElementById("textInput");
const btn = document.getElementById("inputBtn");
const title = document.getElementById("word");


const search = async () => {
    try {
        const word = input.value;
        const txt = document.getElementById("txt");
        const data = await getApi(word);
        const definition = data[0].meanings[0].definitions[0].definition;
        title.innerText = word;
        title.setAttribute("href", "./index.html");
        txt.innerText = definition;
        chrome.storage.sync.set({ word: JSON.stringify(data) });
    } catch (err) {
        console.log(err);
    }
};

btn.addEventListener("click", search);