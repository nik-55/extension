const input = document.getElementById("textInput");
const btn = document.getElementById("inputBtn");
const body = document.getElementById("body");
const open = document.getElementById("open");

const img = document.createElement("img");
img.setAttribute("src","./loading.gif");
img.setAttribute("style","margin-left: 40% ; margin-top:15%")

const titleclick=()=>{
    input.style.display = "none";
    btn.style.display = "none";
}

const search = async () => {
    try {
        body.appendChild(img);
        const word = input.value;
        const txt = document.createElement("p");
        const data = await getApi(word);
        const definition = data[0].meanings[0].definitions[0].definition;
        const title = document.createElement("h5");
        title.innerText = word;
        title.addEventListener("click",titleclick);
        txt.innerText = definition;
        body.removeChild(img);
        body.appendChild(title);
        body.appendChild(txt);
    } catch (err) {
        console.log(err);
    }
};

btn.addEventListener("click", search);

const saveBtn = document.getElementById("saveBtn");
const listBtn = document.getElementById("list");


const save = (wordToSave)=>{
    chrome.storage.sync.get({word_arr : [] },(obj)=>{
        obj.word_arr.push(wordToSave);
        chrome.storage.sync.set({word_arr : obj.word_arr});
    })
}

saveBtn.addEventListener("click",()=>{
    save(input.value);
});


const ul = document.createElement("ul");
listBtn.addEventListener("click",()=>{
    if(!body.contains(ul)){
    body.appendChild(img);
    chrome.storage.sync.get({word_arr : [] },(obj)=>{
       for(const word of obj.word_arr){
            const li = document.createElement("li");
            li.innerText = word;
            ul.appendChild(li);
       }
       body.removeChild(img);
       body.append(ul); 
    })
}
else{ body.removeChild(ul); 
     ul.innerHTML=""
}
})