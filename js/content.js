const KeyPress = async (e) => {
    try {
        const evtobj = e;
        selectedText = document.getSelection().toString();
        const data = await getApi(selectedText);
        if (data !== "Not Found") {
            if (evtobj.ctrlKey && evtobj.keyCode === 90 && evtobj.shiftKey) {
                alert(data[0].meanings[0].definitions[0].definition);
            }
            else if (evtobj.ctrlKey && evtobj.keyCode === 83 && evtobj.shiftKey) {
  
                const obj = {
                    word : selectedText,
                    definition : data[0].meanings[0].definitions[0].definition
                };
                save(obj);
            }
        }
    }
    catch (err) {
        console.log("Err");
    }
}


document.onkeydown = KeyPress;

// const paras = document.getElementsByTagName("p");
// for(const para of paras) para.style.backgroundColor = "yellow";