var van = gsap.timeline()

van.from("h2",{
    y:-20,
    opacity:0,
    duration:1,
    delay:0.5,
})
van.from("h4",{
    y:-20,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:0.3,
})

van.from("h1",{
    y:20,
    opacity:0,
    duration:1,
    scale:0.2,

})



van.to("#box1",{
    x: 1000,
    duration:2,
    delay:1,
    rotate:360,
    backgroundColor:"blue",
    borderRadius:"50%",
})

//gsap.from ka use karte hain animation ko final position se initial pr laane ke liye

van.from("h3",{
    color:"red",
    opacity:0,
    duration:2,
    delay:1,
    y:40,
    stagger:2, //staggering effect used for ek after ek element ko screen par laane ke liye
})
van.to("#box2",{
    // x:1000,
    // duration:2,
    // delay:1,
    // rotate:360,
    // repeat:-1,
    // yoyo:true, //yoyo animation ka use karte hain animation ko reverse karne ke liye
})

// gsap.to(box3,{
//     x:1000,
//     // rotate:360,
//     duration:1.5,
//     delay:1,
// })
// gsap.to(box4,{
//     x:1000,
//     backgroundColor:"yellow",
//     duration:1.5,
//     delay:2.5,
// })
// gsap.to(box5,{
//     x:1000,
//     scale:0.5,
//     borderRadius:"50%",
//     duration:1.5,
//     delay:4,  baar baar kitna delay karna hoga usko calculate krne se bachne se ke liye hum timeline() ka use karte hain
// })

// var tl = gsap.timeline()

van.to("#box3",{
    x:1000,
    rotate:360,
    duration:1.5,
    delay:1,
})
van.to("#box4",{
    x:1000,
    backgroundColor:"yellow",
    duration:1.5,
    // delay:1,
})
van.to("#box5",{
    x:1000,
    scale:0.5,
    borderRadius:"50%",
    duration:1.5,
    // delay:1,
})