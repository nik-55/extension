saveBtn.addEventListener("click", async () => {
    const data = await getApi(input.value);
    if (data !== "Not Found") {
        const obj = {
            word: input.value,
            definition: data[0].meanings[0].definitions[0].definition
        };
        save(obj);
    }
});

const removeit = (word) => {
    console.log(word);
    chrome.storage.sync.get({ word_array: [] }, (obj) => {
        let index;
        for (let i = 0; i < obj.word_array.length; i++) {
            if (obj.word_array[i].word === word.word) { index = i; break; }
        }
        obj.word_array.splice(index, 1);
        chrome.storage.sync.set({ word_array: obj.word_array });
        alert("Removed")
    })
}

const ul = document.createElement("ul");
listBtn.addEventListener("click", () => {
    // parent.contains(child)
    bd.removeChild(body);
    bd.appendChild(img);
    chrome.storage.sync.get({ word_array: [] }, (obj) => {
        for (const word of obj.word_array) {
            const btn = document.createElement("button");
            const div = document.createElement("div");
            div.setAttribute("class", "lsdiv");
            btn.setAttribute("class", "fa-solid fa-trash");
            const li = document.createElement("li");
            btn.addEventListener("click", () => {
                removeit(word);
                ul.removeChild(div);
            });
            li.innerText = word.word;
            li.setAttribute("style", "font-size:smaller")
            const add = () => {
                const para = document.createElement("small");
                para.innerText = word.definition;
                div.appendChild(para);
                li.removeEventListener("click", add);
                const remove = () => {
                    div.removeChild(para);
                    li.removeEventListener("click", remove);
                    li.addEventListener("click", add);
                };
                li.addEventListener("click", remove);
            };
            li.addEventListener("click", add);
            div.appendChild(li);
            div.appendChild(btn);
            ul.appendChild(div);
        }
        bd.removeChild(img);
        bd.append(ul);
    })
})

