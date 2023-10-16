console.log(document.getElementById('left1'));
console.log(document.getElementsByClassName('left2')[0]);
const li_ = document.getElementsByTagName('li');

for(let i=0; i<li_.length; i++)
{
    li_[i].style.backgroundColor="blue";
}
li_[0].setAttribute('id','listNama');
li_[1].setAttribute('class','listName');
const header = document.getElementsByClassName('header')[0];
header.addEventListener('click',function(){
header.innerHTML="KEPALA";
header.style.color="dark";
header.style.fontSize="20pt";
header.style.textAlign="center";
const footer = document.querySelector('#left1');
console.log(footer);
});


const btn1 = document.getElementById('btn1');
btn1.addEventListener('click',function() {
    for(let i=0; i<li_.length; i++) {
        li_[i].style.backgroundColor="red";
    }
});

li_[0].addEventListener('mouseenter',function(){
    li_[0].innerHTML="najla";
    li_[0].style.color="black";
    li_[0].style.backgroundColor="lightgreen";
});
li_[0].addEventListener('mouseleave',function(){
    li_[0].innerHTML="amalia";
    li_[0].style.color="black";
    li_[0].style.backgroundColor="skyblue";
});

li_[1].addEventListener('mouseenter',function(){
    li_[1].innerHTML="sella";
    li_[1].style.color="dark";
    li_[1].style.backgroundColor="lightpink";
});
li_[1].addEventListener('mouseleave',function(){
    li_[1].innerHTML="mira";
    li_[1].style.color="black";
    li_[1].style.backgroundColor="skyblue";
});

li_[2].addEventListener('mouseenter',function(){
    li_[2].innerHTML="nabila";
    li_[2].style.color="dark";
    li_[2].style.backgroundColor="lightsalmon";
})
li_[2].addEventListener('mouseleave',function(){
    li_[2].innerHTML="amii";
    li_[2].style.color="black";
    li_[2].style.backgroundColor="skyblue";
})

