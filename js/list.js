saveBtn.addEventListener("click", async () => {
    const data = await getApi(input.value);
    if(data!=="Not Found"){
    const obj = {
        word : input.value,
        definition : data[0].meanings[0].definitions[0].definition
    };
    save(obj);
    }
});


const ul = document.createElement("ul");
listBtn.addEventListener("click", () => {
    // parent.contains(child)
    bd.removeChild(body);
    bd.appendChild(img);
    chrome.storage.sync.get({ word_array: [] }, (obj) => {
        for (const word of obj.word_array) {
            const li = document.createElement("li");
            li.innerText = word.word;
            li.setAttribute("style","font-size:smaller")
            const add = () => {
                const para = document.createElement("small");
                para.innerText =" : "+ word.definition;
                li.appendChild(para);
                li.removeEventListener("click", add);
                const remove = ()=>{
                    li.removeChild(para);
                    li.removeEventListener("click",remove);
                    li.addEventListener("click",add);
                };
                li.addEventListener("click",remove);
            };
            li.addEventListener("click", add);
            ul.appendChild(li);
        }
        bd.removeChild(img);
        bd.append(ul);
    })
})

