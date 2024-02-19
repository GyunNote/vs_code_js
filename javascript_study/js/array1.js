// //비구조 할당
// let obj = {
//     id:1,
//     name: "김도균",
//     age:27
// }
// // console.log(obj.id); 원래 이렇게 써야하는데
// let{id,name,age} = obj;
// console.log(id); //이렇게 obj 뺄수 있다





let dataList = new Array();
 
window.onload = () =>{
    getDataList(); //나중에 로컬스토리지 쓰면 거기에 저장되어있는 데이터를 불러 온다
    const textInput = document.querySelector(".text-inputs");

    textInput.onkeyup = (e) => {
        if(e.keyCode ===13){
            const inputValue = textInput.value;
            const lastId = dataList.length === 0 ? 0 : dataList[dataList.length-1 ].id;
            const dataObj = {
                id : lastId + 1,
                content : inputValue
            }

            fetch("http://localhost:8080/data_array/data/addition",{
                method:"post",
                mode:"cors",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(dataObj)
            });
            
            dataList = [...dataList, dataObj];        
            textInput.value = "";
            getDataList();
        }
    }
}

function contentData({id,content}){
    return `
    <li>
    <span>${id}번 </span>
    <span>${content}</span>
    <input type="text" class = "edit-inputs" value ="${content} ">
    <button onclick = "editData(${id})">수정</button>
    <button onclick= "removeData(${id})" >삭제</button>
    </li>
    `;

}

function getDataList() {
    const storeInfo = document.querySelector(".store-info");
    storeInfo.innerHTML = "";
    for(let data of dataList){

        storeInfo.innerHTML += contentData(data);
    }
}

function removeData(id){
   // const findId = dataList.filter(data => data.id !== id);
   // dataList = findId;
 //  const findId = function(dataObj){
 //   return dataObj.id !==id;   //조건이 참인 녀석들만 새로운배열로 가져온다
//   }
//   dataList.filter(findId);
    dataList = dataList.filter((data) => data.id !== id);
    getDataList();
}

function editData(id){ //무조건 인덱스 값을 찾는 로직을 만들어야함
    let findIndex = -1;
    
    for(let i =0 ;i<dataList.length;i++){
        if(dataList[i].id === id){
            findIndex = i;
            break;  //인덱스 값을 찾았으니까 더 찾을 필요없어서 for문 종료
        }
    }
    let findObj = dataList.filter((data) => data.id === id)[0];
    findIndex = dataList.indexOf(findObj);
    const editInput = document.querySelectorAll(".edit-inputs");

    dataList[findIndex].content = editInput[findIndex].value;
    getDataList();
}



// let dataList = new Array();

// window.onload = () => {
//     getDataList();
//     const textInput = document.querySelector(".text-inputs");

//   textInput.onkeyup = (e) => {
//     if(e.keyCode === 13){
//       const inputValue = textInput.value;
//       const lastId = dataList.length === 0 ? 0 : dataList[dataList.length -1].id ; 
      
//       const dataObj = {
//         id: lastId +1 ,
//         content : inputValue
//       }
//       dataList = [...dataList,dataObj];
//       textInput.value = "";
//       getDataList();
//     }
//   }
// } 

// function getDataList() {
//     const storeInfo = document.querySelector(".store-info");

//     storeInfo.innerHTML = "";
//     for(let data of dataList){
        
//         storeInfo.innerHTML += `
//         <li>
//         <span>${data.id}번 </span>
//         <span>${data.content}</span>
//         <input type="text" class = "edit-inputs" value ="${data.content} ">
//         <button onclick = "editClick(${data.id})">수정</button>
//         <button onclick= "removeClick(${data.id})" >삭제</button>
//         </li>
//        `;
//     }
// }








//spread 연산
// let array= [1,2,3,4];
// array.push(5);
// array = [...array, 5,6,...array];
// console.log(array);
// let obj = {
//     name : "김도균",
//     age  : 27
// }
// let obj2 = {
//     ...obj , //obj에 들어있는 값이 그대로 들어옴
//      name : "김도균2" //부분변경 하고 싶을때 key 값은 중복이 안됨으로 덮어씀
// }
// console.log(obj);
// console.log(obj2);

