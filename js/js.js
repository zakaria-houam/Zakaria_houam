
var social = document.querySelectorAll(".social-media i");
for(var i=0 ; i< social.length;i++){
    social[i].addEventListener('mouseover',function(){
        this.classList.add('hover');
    })
    social[i].addEventListener('mouseleave',function(){
        this.classList.remove('hover');
    })
}

var menu = document.querySelector(".menu .bx-menu");
var homeCenter = document.querySelector(".title");
var list = document.querySelector(".menu-page")
var close = document.querySelector(".close i")
var items = document.querySelectorAll(".menu-page ul li")
menu.addEventListener('click',function(){
    homeCenter.classList.toggle("hide");
    list.classList.toggle("show-menu");
})
close.addEventListener('click',function(){
    homeCenter.classList.toggle("hide");
    list.classList.toggle("show-menu");
})
for (var i =0 ; i<items.length ; i++){
    items[i].addEventListener('click',function(){
        homeCenter.classList.toggle("hide");
        list.classList.toggle("show-menu");
    })
}