window.onload = () => {
    const textInput = document.querySelector(".text-inputs");
    handleAddClick();
  
   
} 

// function letLoop(){
//     storeInfo.innerHTML = "";
//     for(let todo of todoList){
        
//         storeInfo.innerHTML +=`
      
//         <li>
//         <span>${todo.todoId}번</span>
//         <span>내용</span>
//         <input type="text" value="${todo.content}">
//         <button>수정</button>
//         <button onclick= "removeClick(${todo.todoId})" >삭제</button>
//     </li>
//        `;
//    }
// }

//추가하는 기능
const plusInfo = document.querySelector(".plus-info");
let todoList = new Array();
function handleAddClick(){

    plusInfo.onclick = () => {
      
        const storeInfo = document.querySelector(".store-info");
        
        
        let lastTodoId = todoList.length === 0 ? 0 : todoList[todoList.length -1].todoId;   

        let todoObject = {
            todoId : lastTodoId + 1,
            content : textInput.value,
        }
        
         todoList.push(todoObject);
         textInput.value ="";
         storeInfo.innerHTML="";
         
         for(let todo of todoList){
             
             storeInfo.innerHTML +=`
             <li>
             <span>${todo.todoId}번</span>
             <span>내용</span>
             <input type="text" value="${todo.content}">
             <button onclick = "editClick(${todo.todoId})">수정</button>
             <button onclick= "removeClick(${todo.todoId})" >삭제</button>
         </li>
            `;
        }
        
    }

}


function removeClick(todoId) {
   // const removeButton = document.querySelectorAll(".remove-info");
    const storeInfo = document.querySelector(".store-info");
   // removeButton.onclick = () => {

        let selected = confirm("정말 삭제하시겠습니까?");
        if(!selected){
            return;
        }else{
            
           // const todoList = new Array();
            const newTodoList = todoList.filter(todo => todo.todoId !==todoId);
            todoList = newTodoList;
            
            storeInfo.innerHTML = "";
            for(let todo of todoList){
                
                storeInfo.innerHTML +=`
              
                <li>
                <span>${todo.todoId}번</span>
                <span>내용</span>
                <input type="text" value="${todo.content}">
                <button onclick = "editClick(${todo.todoId})">수정</button>
                <button onclick= "removeClick(${todo.todoId})" >삭제</button>
            </li>
               `;
           }

        }
        
    }
// function editClcik(todoId){
//     const storeInfo = document.querySelector(".store-info");
//     const textInput = document.querySelector(".text-inputs");
    
//     let selected0 = confirm("정말 수정하시겠습니까??");
//     if(!selected0){
//         return;
//     }
//     else{
//         const findById = todoList.filter(todo => todo.todoId === todoId)[0];
//         textInput.value = findById.content;
        
//         editButton.onclick = () => {

//             let findIndex = -1;
//             for(let i =0;i< todoList.length;i++){
//                 if(todoList[i].todoId ===todoId){
//                     findById = i;
//                     break;
//                 }
//             }
//             if(findById === -1){
//                 alert("수정오류")
//                 return;
//             }
//             todoList[findById].content = document.querySelector(".text-inputs").value;

//             storeInfo.innerHTML = "";
//             for(let todo of todoList){
                
//                 storeInfo.innerHTML +=`
              
//                 <li>
//                 <span>${todo.todoId}번</span>
//                 <span>내용</span>
//                 <input type="text" value="${todo.content}">
//                 <button onclick = "editClick(${todo.todoId})">수정</button>
//                 <button onclick= "removeClick(${todo.todoId})" >삭제</button>
//             </li>
//                `;
//            }

//         }

//     }
// }
