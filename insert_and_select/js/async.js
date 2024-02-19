console.log(1);
console.log(2);
console.log(3);

// setTimeout(() => {
//     console.log(4);
//     setTimeout(() => {
//         console.log(5);
//         }, 2000); 
//     },3000);


// new Promise(    (resolve,reject) => {
//     setTimeout(() => {
//         console.log("1번");
//     },2000);
//     resolve("3번");
// }).then((result) => {
//     setTimeout(() => {
//         console.log(result);
//     },3000);
// });

// setTimeout(() => {
//     console.log("2번");
// },2000);




console.log("프로그램 시작");

const p = new Promise((resolve,reject) => {
   
    console.log("여기서");
    console.log("여기까지");
    if(0===0){                          //resolve 를 받아올수도 있고 reject 를 받아올수도 있는데  주로 reject 는 예외 처리 할떄 사용 (에러 메시지)
        resolve("?");                   //resolve 를 사용하면 then 호출 가능  reject 를 사용하면 catch 호출 가능 
    }else{
        reject(new Error("오류입니다."));
    }
});

p.then(() => {
    console.log("3초뒤에 출력");
}).catch((error) => {
    console.log(error);
}).finally(() => {

});


console.log("여기가 먼저");