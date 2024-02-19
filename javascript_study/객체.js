//자바스크립트 객체 형태 = {key: value, key: value}
let student = {
    name:"김준일",
    age:31
}

console.log(student);
console.log(student.name);
console.log(typeof(student));

class student1{
    name;
    age;

//생성자
    constructor(name,age){
        this.name =name;
        this.age =age;
    }
}
let s = new student1("김도균",33);
s.age=33;
s.name="김ㄷ"
console.log(s);

class User{
    #username;
    password;

    set setUsername(username){
        this.#username=username;
    }
    get username(){
        return this.#username;
    }
}

let user = new User();
user.setUsername = ("ㄷㄷㄱㄴ");
console.log(user.username);


let dataMap = new Map();
dataMap.set("username","dogyun");
dataMap.set("password","1234");

console.log(dataMap)
console.log(dataMap.get("password"));