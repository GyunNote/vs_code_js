let dataList = new Array();

window.onload = () =>{
    const textInput = document.querySelector(".text-inputs");
    textInput.onkeyup = (e) =>{

        if(e.keyCode === 13){
            
            const lastId = dataList.length === 0 ? 0 : dataList[dataList.length-1].id;
            const dataObj = {
                id : lastId + 1,
                content : textInput.value
            }
            
            dataList = [...dataList, dataObj];        
            textInput.value = "";
            getDataList();
        }
    }
}
    
function getDataList() {
    const storeInfo = document.querySelector(".store-info");
    storeInfo.innerHTML = "";
    for(let data of dataList){
        
        storeInfo.innerHTML += `<li>
        <span>${data.id}번 </span>
        <span>${data.content}</span>
        <input type="text" class = "edit-inputs" value ="${data.content} ">
        <button onclick = "editData(${data.id})">수정</button>
        <button onclick= "removeInfo(${data.id})" >삭제</button>
        </li>
        `;
    }
}

function removeInfo(id) {

    dataList = dataList.filter((data) => data.id !== id)
    getDataList();
}

function editData(id){
    let findIndex = -1;
    for(i = 0; i< dataList.length;i++){
        if(dataList[i].id === id){
            findIndex = i;
            break;
        }
    }
   
    const editInput = document.querySelectorAll(".edit-inputs");
    dataList[findIndex].content = editInput[findIndex].value;
    getDataList();
    editInput[findIndex].value = "";
}