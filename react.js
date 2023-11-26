gsap .from("img",{
    x: -100,
    duration:2,
    delay:1,
    scale:0.5
})
gsap .from(".content",{
    duration:2,
    delay:1,
    scale:0.5,
    stagger:1
})
gsap .from(".scroll",{
    y:10,
    delay:2,
    repeat:-1,
    yoyo:true,
    stagger:1
})