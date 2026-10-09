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

class User {
    constructor(name , imail){
        this.name=name;
        this.email=this.email;
    }

     viewData=(   )=>{
        console.log("user name : " + this.name + ", user email : " + this.email);
    }



}

let student1 = new User("shweta" , "shweta@gmail");

class Admin extends User{
    constructor(name , email){
        super();
        this.name=name;
        this.email=email;
    }

    editData () {
        console.log("can edit data");
    }

}

let teacher=new Admin("ankita" , "tikki@gmail.com");










