
saveBtn.addEventListener("click", async () => {
    const data = await getApi(input.value);
    if(data!=="Not Found")
    save(data[0]);
});


const ul = document.createElement("ul");
listBtn.addEventListener("click", () => {
    // parent.contains(child)
    bd.removeChild(body);
    bd.appendChild(img);
    chrome.storage.sync.get({ word_array: [] }, (obj) => {
        for (const word of obj.word_array) {
            const li = document.createElement("li");
            li.innerText = word.word.toUpperCase();
            li.setAttribute("style","font-size:smaller")
            const add = () => {
                const para = document.createElement("small");
                para.innerText =" : "+ word.meanings[0].definitions[0].definition;
                li.appendChild(para);
                li.removeEventListener("click", add);
            };
            li.addEventListener("click", add);
            ul.appendChild(li);
        }
        bd.removeChild(img);
        bd.append(ul);
    })
})

