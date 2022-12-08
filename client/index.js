const { response } = require("express");

document.addEventListener('DOMContentLoaded',function(){
    fetch('http://localhost:5000/get')
    .then(response=>response.json())
    .then(data=>console.log(data));
loadTable([]);
});

function loadTable(data){
    const table=document.querySelector('table tbody');
    if(data.length===0){
        table.innerHTML="<tr><td class='no-data' colspan='5'>No Data</td></tr>";
    }
}