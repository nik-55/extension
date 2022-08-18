const save = (wordToSave) => {
    chrome.storage.sync.get({ word_array: [] }, (obj) => {
        obj.word_array.push(wordToSave);
        chrome.storage.sync.set({ word_array: obj.word_array });
    })
}
