const save = (wordToSave) => {
    chrome.storage.sync.get({ word_array: [] }, (obj) => {
        for (const word of obj.word_array) {
            if (word.word === wordToSave.word) {
                alert("Already Bookmarked")
                return;
            }
        }
        obj.word_array.push(wordToSave);
        chrome.storage.sync.set({ word_array: obj.word_array });
        alert("Saved")
        return;
    })
}
