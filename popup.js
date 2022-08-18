const input = document.getElementById("textInput");
const btn = document.getElementById("inputBtn");
const body = document.getElementById("body");
const open = document.getElementById("open");
const saveBtn = document.getElementById("saveBtn");
const listBtn = document.getElementById("list");
const bd = document.getElementsByTagName("body")[0];

const img = document.createElement("img");
img.setAttribute("src", "./loading.gif");
img.setAttribute("style", "margin-left: 40% ; margin-top:15%")

const titleclick = () => {
    input.style.display = "none";
    btn.style.display = "none";
    saveBtn.style.display = "none";
    listBtn.style.display = "none";
}

const search = async () => {
    try {
        body.appendChild(img);
        const word = input.value;
        const txt = document.createElement("p");
        const data = await getApi(word);
        if(data!=="Not Found"){
        const definition = data[0].meanings[0].definitions[0].definition;
        const title = document.createElement("h5");
        title.innerText = word;
        title.addEventListener("click", titleclick);
        txt.innerText = definition;
        body.removeChild(img);
        body.appendChild(title);
        body.appendChild(txt); }
    } catch (err) {
        console.log(err);
    }
};

btn.addEventListener("click", search);

