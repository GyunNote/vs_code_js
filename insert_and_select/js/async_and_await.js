async function fx1(){                                   //여기서 (Promise 를 함수로 정의할때 쓰는게 async)
    console.log("fx1 비동기 호출");

    return 10;
   // throw new Error();                                 //reject 처럼 동작  에러 강제 발생 시킴   
}

async function fx2(num){                                  
    console.log("fx2 비동기 호출");
    console.log(num + "출력");
    
}

async function fx3(){ 
    let arg = 0;                                 

    let fx1Result = await fx1();                          //await ==> 비동기를 동기로 바꿔주는 것 ::::: 비동기가 끝날 때 까지 기다림
    arg = fx1Result;;                                     // async 함수 안에서만 사용가능
    fx2(arg);


    // fx1().then((reuslt) => {
    //     arg = reuslt;
    //     console.log(arg);
    //     fx2(arg);
  //  });

}



function handleSubmitClick2(){              //async 를 사용하면 함수의 리턴값이 Promise 로 변한다  마우스 올려보면 나옴

    fx3();
    // fx1().then((result) => {
    //     console.log("then 호출한다?");
      
    // }).catch(() => {
    //     console.log("오류발생");
    // });

    // console.log("동기실행");
}




function handleSubmitClick(){

const p1 = new Promise((resolve , reject) => {
    console.log("p1 프로미스 실행");
    resolve();
});

p1.then(() => {
    console.log("p1 then 실행");
    return 10;
}).then((num) => {
    console.log(num);
    return 11;
}).then((num) => {
    console.log(num);
}).catch(() => {
    console.log("오류");
});



const p2 = new Promise((resolve , reject) => {
    console.log("p2 프로미스 실행");
});

console.log("동기실행");

}


