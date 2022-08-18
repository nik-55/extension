const KeyPress = async (e) => {
    var evtobj = e;
    if (evtobj.ctrlKey && evtobj.keyCode == 90 && evtobj.shiftKey) {
        selectedText = document.getSelection();
        const data = await getApi(selectedText)
        alert(data[0].meanings[0].definitions[0].definition);
    }
}

document.onkeydown = KeyPress;

// const paras = document.getElementsByTagName("p");
// for(const para of paras) para.style.backgroundColor = "yellow";