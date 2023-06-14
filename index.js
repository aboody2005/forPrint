let btn =document.getElementById('btn');
let btn1 =document.getElementById('btn1');

let repeatText =()=>{
   const input =document.getElementById('input').value; 
 for (let index = 1; index <= input; index+=2) {
    const element = index;
   
    // const newDiv = document.createElement("div");
    // const newContent = document.createTextNode(element);
    // newDiv.appendChild(newContent);
    // const currentDiv = document.getElementById("div1");
    // document.body.insertBefore(newDiv,currentDiv);
    let div = document.createElement('div');
    div.id = 'content';
    div.innerHTML =`,`+element;
    document.getElementById("div1").append(div);


 }
 let p = document.createElement('p');
    p.id = 'content';
    p.innerHTML ='====================';
    document.getElementById("pa").append(p);
 for (let index = 2; index <= input; index+=2) {
    const element2 = index;


    let div2 = document.createElement('div');
    div2.id = 'content2';
    div2.innerHTML =`,`+element2 ;
    document.getElementById("div2").append(div2);

 }
 

}


