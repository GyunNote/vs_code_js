const submitButton = document.querySelector(".input-submit");

//이벤트 속성
submitButton.onclick = () =>{
    const input = document.querySelector(".inputs");
    const datalist = document.querySelector(".data-list");

    datalist.innerHTML += `<li>${input.value}</li>`;
}

/*
let submitButton = {
    onclick : null;
}
submitButton.onclick = () =>{
    
}
*/