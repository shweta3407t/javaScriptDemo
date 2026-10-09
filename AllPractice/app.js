// console.log("shweta");

let heading = document.querySelector("h1");

let h = document.querySelector("h2");
h.innerText = h.innerText + " from shweta student";

//  let divs=document.querySelectorAll(".box");

//  divs[0].innerText="shweta";
//  divs[1].innerText="tikki";
//  divs[2].innerText="ankita";

//  let div=document.querySelector("div");
//  div.innerText="shweta";

// let btn=document.createElement("button");
// btn.innerText=("click me");
// console.log(btn);

//   div.after(btn);

// let btn=document.createElement("button");
// btn.innerText=("click me");
//  btn.style.backgroundColor="purple";
//  btn.style.color="white";

// document.body.prepend(btn);

// let p= document.querySelector("p");

// p.classList.add("myNewClass");

// let student = {
//     fullname : "shweta",
//     roll : 23 ,
//     studey  (){
//         console.log(this.fullname + "studing");
//     }
// }

// let employee = {
//     calTax(){
//         console.log("tax is 10%");
//     }
// }

// const shweta ={
//   salary : 3000

// }

// shweta.__proto__ = employee ;

// class car{
//     brand = car;

//     constructor(brand){
//        console.log("enter parant constructor");
//         this.brand=brand;
//     }

//     stop (){
//         console.log( this.brand + " car breaking");
//     }
// }

// class farari extends car{
//     brand="shweta";
//     constructor(){
//         super();
//         console.log("neter child constructor");
//     }

// }

// let farariCar=new farari();

// class User {
//     constructor(name , imail){
//         this.name=name;
//         this.email=this.email;
//     }

//      viewData=(   )=>{
//         console.log("user name : " + this.name + ", user email : " + this.email);
//     }

// }

// let student1 = new User("shweta" , "shweta@gmail");

// class Admin extends User{
//     constructor(name , email){
//         super();
//         this.name=name;
//         this.email=email;
//     }

//     editData () {
//         console.log("can edit data");
//     }

// }

// let teacher=new Admin("ankita" , "tikki@gmail.com");

//sync and async

// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");

// setTimeout( ()=>{
//     console.log("shweta i timeout ");
// } , 2000);

// console.log("6");
// console.log("7");

// calculator =( a , b ,sumCallBack )=>{

//     sumCallBack(a, b);

// }

// calculator(10 , 20 , ( a , b )=>{
//     console.log(a+b);
// });

// //callback

// function getData (data , getNextData) {
//     setTimeout(()=>{
//          console.log("data of " +  data);
//          if(getNextData) {
//             getNextData()
//          }
//          } , 1000);

// }

// getData(1 , ()=> {
//     getData(2 , ()=>{
//         getData(3 , ()=>{
//             getData(4);
//         })
//     })
// })

// ///promiss
// let promiss = new Promise((resolve, reject) => {
//   console.log("i am promiss");
//   // resolve("order complete");
//   reject("some error occured");
// });

// function getData(data, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data of " + data);
//       //  resolve("sucess");
//       if (getNextData) {
//         getNextData();
//       }
//     }, 1000);
//   });
// }

// getData(1, () => {
//   getData(2, () => {
//     getData(3, () => {
//       getData(4);
//     });
//   });
// });

// let getPromiss = () => {
//   return new Promise((resolve, reject) => {
//     console.log("i am promissing");
//     resolve("sucess");
//     // reject("error");
//   });
// };

// let promise = getPromiss();

// promise.then((result) => {
//   console.log(result + " promisss full filed");
// });

// promise.catch((error) => {
//   console.log(error + " promiss rejected");
// });

// asyncFunc = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data 1");
//       resolve("success");
//     }, 3000);
//   });
// };

// asyncFunc2 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data 2");
//       resolve("success");
//     }, 3000);
//   });
// };

// ////
// console.log("getting data 1.....");
// asyncFunc().then((result) => {
//   console.log(result);

//   console.log("getting data 2...");
//   asyncFunc2().then((result) => {
//     console.log(result);
//   });
// });

// ////async -await

// function api() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("weather data");
//       resolve(200);
//     }, 4000);
//   });
// }

// async function getWeatherData() {
//   await api();
//   await api();
//   await api();
//   await api();
//   await api();
// }

// function getData(data) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data of " + data);
//        resolve("sucess");

//     }, 1000);
//   });
// }

// async function  getAllData( ) {
//     await getData(1);
//     await getData(2);
//     await getData(3);
//     await getData(4);

// }

// //IIFE this we do not need to call it willl automatically get called-----drawBackcannot reuse it

// (async function  () {
//   await api();
//   await api();
//   await api();
//   await api();
//   await api();
// })();

// (async function ( ) {
//     await getData(1);
//     await getData(2);
//     await getData(3);
//     await getData(4);

// })();

///fetch API
const URL = "http://localhost/8080/api/image/search";

let getImage = async () => {
  console.log("getting image");
  let response = await fetch(URL);
  console.log(response);
};


