window.addEventListener('DOMContentLoaded', (event) =>{
    getvisitcount();
})

const functionapi = '';

const getvisitcount = () => {
    let count = 30;
    fetch(functionapi).then(responce => {
        return responce.json()
    }).then(response =>{
        console.log("Website called function API.");
        count = responce.count;
        document.getElementById("counter").innertext = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}