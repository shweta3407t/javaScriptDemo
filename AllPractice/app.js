console.log("shweta");

let heading=document.querySelector("h1");


let h=document.querySelector("h2");
 h.innerText=h.innerText + " from shweta student";


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


function getData (data , getNextData) {
    setTimeout(()=>{
         console.log("data of " +  data); 
         if(getNextData) {
            getNextData()
         }
         } , 1000);
    
}

getData(1 , ()=> {
    getData(2 , ()=>{
        getData(3 , ()=>{
            getData(4);
        })
    })
})










