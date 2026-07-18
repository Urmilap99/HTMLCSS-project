const text="Hi! I want to ask you something... ❤️";

let i=0;

function showModal(message){
    document.getElementById("modalMessage").innerHTML=message;
    document.getElementById("modal").classList.remove("hide");
}

function hideModal(){
    document.getElementById("modal").classList.add("hide");
}

document.getElementById("modalBtn").onclick=function(){
    hideModal();
}

 function typing(){
    if(i<text.length){
        document.getElementById("typing").innerHTML+=text.charAt(i);
        i++;
        setTimeout(typing,80);

    }
 }
 typing();

 document.getElementById("startbtn").onclick=function(){
    let name=document.getElementById("name").value;
    if(name===""){
        showModal("Please enter your name 😊");
        return;
    }
    document.getElementById("typing").style.display="none";
    document.getElementById("name").style.display="none";
    document.getElementById("startbtn").style.display="none";
    document.getElementById("proposal").classList.remove("hide");

document.getElementById("question").innerHTML=

`${name}, Will you be my partner? ❤️`;

}

const no=document.getElementById("no");

const funnyMessages=[

"Are you sure? 🥺",

"Think again 😅",

"I'll buy you pizza 🍕",

"Free chocolates 🍫",

"Please...🥹",

"Last chance 😂"

];

let count=0;

no.addEventListener("mouseover",()=>{

const x=Math.random()*300-150;

const y=Math.random()*200-100;

no.style.transform=`translate(${x}px,${y}px)`;

});

no.addEventListener("click",()=>{

showModal(funnyMessages[count%funnyMessages.length]);

count++;

});

document.getElementById("yes").onclick=function(){

confetti({

particleCount:250,

spread:180

});

document.querySelector(".container").innerHTML=`

<h1>🎉 Yay!! ❤️</h1>

<p class="result">

You just made my day! 🌸

<br><br>

Let's create beautiful memories together 💕

</p>

`;

}

function createHeart(){

const heart=document.createElement("div");

heart.classList.add("heart");

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=Math.random()*25+15+"px";

heart.style.animationDuration=(Math.random()*5+4)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

}

setInterval(createHeart,300);
 