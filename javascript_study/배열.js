//기본적으로 자바의 ArrayList 와 유사
let numbers1= [];
let numbers2=new Array();

numbers1.push(10);
console.log(numbers1);

numbers1.push(20);
console.log(numbers1);
console.log(numbers1[0]);
numbers1[0]=30;
console.log(numbers1);
numbers1[2] = 50;
console.log(numbers1);
numbers1[5] = 100;
console.log(numbers1);

for(let i=0;i<10;i++){
console.log(numbers1[i]);
}

for(let num of numbers1){
console.log(num);
}

numbers1.forEach(n => console.log(n));
