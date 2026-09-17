function user(){
    
fetch("https://randomuser.me/api/?results=5")
.then((raw)=>{
     return raw.json();}
    )
.then((data)=>{
    console.log(data.results);
    
let main=document.querySelector(".main");
main.innerHTML=" ";
    
data.results.forEach((users) => {
        
    
let div=document.createElement("div");
div.classList.add("card");


let img=document.createElement("img");
img.src=users.picture.large;
let h2=document.createElement("h2");
h2.textContent=users.name.first + ' '+users.name.last;
let p=document.createElement("p");
p.classList.add("bio");
p.textContent=users.gender;

let p1=document.createElement("p");
p.classList.add("person-email");
p1.textContent=users.email;
div.append(img,h2,p,p1);
main.append(div);

})
});
};
user();
let btn=document.querySelector("button");
btn.addEventListener("click",function(){
    user();
})


