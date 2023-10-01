window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const FunctionApiUrl = 'https://getresumecounterstundze.azurewebsites.net/api/GetResumeCounter?code=ddOdCVhDYgE5oAFlg-7IAQX5bQc5fdTAAwTqhGvDecP7AzFuxHQSUw=='
const localFunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(FunctionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
        count =  response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}