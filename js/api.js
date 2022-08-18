const getApi = async (word) => {
    try{
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    if(response.status === 404) {  return "Not Found"; }
    const data = await response.json();
    return data; }
    catch(err){
        console.log("err occured in api call");
    }
}