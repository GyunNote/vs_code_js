const addinfo = document.querySelector(".input-info");
let index = 1;

addinfo.onclick = () =>{

    const add = document.querySelectorAll(".text-inputs");
    const datalist = document.querySelector(".data-list");

    datalist.innerHTML += `<tr> 
        <td>${index}</td>
        <td>${add[0].value}</td>
        <td>${add[1].value}</td>
        <td>${add[2].value}</td>
    
    </tr>`
    index++;
    for(let input of add){
        input.value=""
    }

}