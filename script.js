function videoanimation(){
var vidcon=document.querySelector(".video");
var playbtn=document.querySelector(".play");
vidcon.addEventListener("mouseenter",function(){
    gsap.to(playbtn,{
        opacity:1,
        scale:1});
});
vidcon.addEventListener("mouseleave",function(){
    gsap.to(playbtn,{
        opacity:0,
        scale:0});
});

vidcon.addEventListener("mousemove",function(dets){
    gsap.to(playbtn,{
        left:dets.x-60,
        top:dets.y-60,


    });
});
}
videoanimation();


function loadanimation(){
    gsap.from(".page1 h1",{
        y:100,
        opacity:0,
        stagger:0.3,
        delay:0.5,
        duration:0.8
    
    })
}
loadanimation();
function videoloadanimation(){
    gsap.from(".page1 video",{
        scale:0.9,
        opacity:0,
        delay:1.5,
        duration:0.4
    
    })
}
videoloadanimation();
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});