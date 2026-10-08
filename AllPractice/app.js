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




let student = {
    fullname : "shweta",
    roll : 23 ,
    studey  (){
        console.log(this.fullname + "studing");
    }
}


let employee = {
    calTax(){
        console.log("tax is 10%");
    }
}

const shweta ={
  salary : 3000 

}

shweta.__proto__ = employee ;


class car{
    brand;

    constructor(brand){
        this.brand=brand;
    }
 
     

    stop (){
        console.log( this.brand + " car breaking");
    }
}

class farari extends car{
    brand="shweta";

}

let farariCar=new farari( );









