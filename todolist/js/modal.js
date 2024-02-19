//  window.onload = () => {
// //     const day = ["일", "월", "화", "수", "목", "금", "토"];
// //     let now = new Date();
// //     console.log(now.getFullYear());
// //     console.log(now.getMonth() + 1);
// //     console.log(now.getDate());
// //     console.log(day[now.getDay()]);
// // }
//     let arr = new Array();
//     let obj = {
//         id : 1,
//         name : "김도균" 
//     }
//     let obj2 = {
//         id : 2,
//         name : "김도균2" 
//     }
//     arr.push(obj);
//     arr.push(obj2);

//     console.log(arr);

//     console.log(JSON.stringify(arr));
//     console.log(JSON.stringify(obj));
//     console.log(JSON.stringify(obj2));
    
//     let jsonArr = JSON.stringify(arr);
//     console.log(JSON.parse(jsonArr));
// }


window.onkeyup = (e) => {
    if(e.keyCode === 27){
        handleCancelClick();
    }
}

function convertDateKor(currentDate){
    const dayKor = ["일", "월", "화", "수", "목", "금", "토"];
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const date = currentDate.getDate();
    const day = dayKor[currentDate.getDay()];
    return `${year}년 ${month}월 ${date}일 (${day})`;
}


function handleAddTodoModalOpen(){
    const modal = document.querySelector(".root-modal");
    const title = modal.querySelector(".modal-title");
    const todoInput = modal.querySelector(".todo-input");
    const submitButton = modal.querySelector(".modal-button");
    title.innerHTML = "추가하기"
    todoInput.value = "";
    submitButton.onclick = handleAddTodoSubmit;

    todoInput.onkeydown = (e) => {
        if(e.ctrlKey && e.keyCode === 13){
            submitButton.click();
        }
    }
    modal.classList.add("modal-show");
}

function handleAddTodoSubmit(){
    const modal = document.querySelector(".root-modal");
   const todoInput = modal.querySelector(".todo-input");
         modal.classList.remove("modal-show");
   // const submitButton = modal.querySelector(".modal-button");

   let todoListJson = localStorage.getItem("todoList");
   let todoList = todoListJson !== null ? JSON.parse(todoListJson) : new Array(); //투두리스트제이슨이 널이아니면  제이슨 값을 객체로 받아옴
   
   let lastTodoId = todoList.length === 0 ? 0 : todoList[todoList.length -1].todoId;    //투두리스트의 길이가 0이면 0을 넣고 아니면 투두리스트의 마지막 인덱스값의 아이디를 불러옴

   let todoObject = {
       todoId : lastTodoId + 1,
       content : todoInput.value,
       date : convertDateKor(new Date())
   }

    todoList.push(todoObject);

     localStorage.setItem("todoList", JSON.stringify(todoList)); //객체 값을 제이슨 형태로 바꿔옴
     getTodoList();
   
        // const middleMain = document.querySelector(".m-main");
        // if (!todoInput.value) alert('내용을 입력해 주세요!');
        // else{
        //      middleMain.innerHTML += todoInput.value;
        //      modal.classList.remove("modal-show");

            // list.innerText = inputBox.value; 
            // middleMain.appendChild(list);    

      //  }

}


function handleEditTodoModalOpen(todoId) {
    const modal = document.querySelector(".root-modal");
    const title = modal.querySelector(".modal-title");
    const todoInput = modal.querySelector(".todo-input");
    const submitButton = modal.querySelector(".modal-button");
    title.innerHTML = "수정하기"

    let todoListJson = localStorage.getItem("todoList");
    let todoList = todoListJson !== null ? JSON.parse(todoListJson) : new Array();

    let findTodoByTodoId = todoList.filter(todo => todo.todoId ===todoId)[0];


    todoInput.value = findTodoByTodoId.content;
    submitButton.onclick = () =>  handleEditTodoSubmit(todoId);

    todoInput.onkeydown = (e) => {
        if(e.ctrlKey && e.keyCode ===13){
            submitButton.click();
        }
    }

    modal.classList.add("modal-show");
       
}

function handleEditTodoSubmit(todoId){
    const modal = document.querySelector(".root-modal");
    modal.classList.remove("modal-show");

    let todoListJson = localStorage.getItem("todoList");
    let todoList = todoListJson !== null ? JSON.parse(todoListJson) : new Array();

    let findIndex = -1;
    for(let i =0;i< todoList.length;i++){
        if(todoList[i].todoId ===todoId){
            findIndex = i;
            break;
        }
    }
    if(findIndex === -1){
        alert("수정오류")
        return;
    }
    todoList[findIndex].content = document.querySelector(".todo-input").value;
    todoList[findIndex].date = convertDateKor(new Date());

    localStorage.setItem("todoList", JSON.stringify(todoList));
    getTodoList();
    
}

function handleCancelClick(){
    const modal = document.querySelector(".root-modal");
    modal.classList.remove("modal-show");
}


