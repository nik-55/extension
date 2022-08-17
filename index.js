chrome.storage.sync.get("word", ({ word }) => {
    const des = document.getElementById("description");
    const h = document.createElement("h5");
    const wor = JSON.parse(word);
    h.innerText = wor[0].word
    des.appendChild(h);
    const p = document.createElement("p");
    p.innerText = wor[0].meanings[0].definitions[0].definition;
    des.appendChild(p);
});

