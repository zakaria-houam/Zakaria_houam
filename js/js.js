
var social = document.querySelectorAll(".social-media i");
for(var i=0 ; i< social.length;i++){
    social[i].addEventListener('mouseover',function(){
        this.classList.add('hover');
    })
    social[i].addEventListener('mouseleave',function(){
        this.classList.remove('hover');
    })
}

var menu = document.querySelectorAll(".menu");
var homeCenter = document.querySelector(".title");
var list = document.querySelector(".menu-page")
var closes = document.querySelectorAll(".close")
var items = document.querySelectorAll(".menu-page ul li")
var front = document.querySelector(".front-end");
for (var i =0 ; i<menu.length ; i++){
menu[i].addEventListener('click',function(){
    homeCenter.classList.toggle("hide");
    list.classList.toggle("show-menu");
    
})}
for (var i =0 ; i<closes.length ; i++){
    closes[i].addEventListener('click',function(){
        homeCenter.classList.toggle("hide");
        list.classList.toggle("show-menu");
       
    })}
for (var i =0 ; i<items.length ; i++){
    items[i].addEventListener('click',function(){
        homeCenter.classList.toggle("hide");
        list.classList.toggle("show-menu");
    })
}