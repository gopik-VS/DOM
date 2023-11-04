console.log(document);
 var head = document.getElementById('head1');
 head.style.color='red';
 var head = document.getElementById('head2');
 head.style.color='green';
//  head.setAttribute("hidden",true);
head.innerText="changed";
 var td = document.getElementById("text");
 td.innerHTML=`<h1>I have created a h1 tag</h1>`
 var tp =document.getElementsByClassName("cont");
 console.log(tp);
 tp[0].style.color="blue";

 var q = document.querySelector(".list");
 q.style.backgroundColor="yellow";
//  var q = document.getElementsByClassName("list");
// q[0].style.backgroundColor="violet";

var fc= document.getElementsByTagName('li');
fc[0].style.color="red"
var fc= document.getElementsByTagName('li');
fc[1].style.color="violet"
 
var btn= document.getElementById("val")
function popup(){
    // alert("button clicked");
    btn.style.color="violet"
}
    var btn=document.getElementById("u2");
    u2.addEventListener("click",function display(){
        alert("eventlistener works")
    })

    var em=document.getElementById("email");
    function show(){
        em.style.backgroundColor="lightgreen"

    }
    var name=document.getElementById("name");
    function capval(event){
        console.log(event.target.value);


    }
    var head4=document.getElementById("head4");
    function changeColor(){
        head4.style.color="red"
    }
    function backColor(){
        head4.style.color="blue"
    }








 