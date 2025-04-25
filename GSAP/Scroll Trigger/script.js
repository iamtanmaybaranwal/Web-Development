gsap.from("#page1 #box",{
    scale:0,
    duration:2,
    delay:1,
    rotate:360,
})
gsap.from("#page2 #box", {
    scale:0,
    opacity:0,
    duration:2,
    rotate:720,
    scrollTrigger:{
        trigger:"#page2 #box",
        scroller:"body",
        start:"top 80%",
        end:"top 30%",
        // markers:true,
        scrub:2, //scrub ka use hum jaise jaise scroll kare waise waise animation ho tb krte hain
    }
})

gsap.to("#page3 h1",{
    transform: "translateX(-190%)",
    scrollTrigger:{
        trigger:"#page3",
        // markers:true,
        start:"top 0%",
        end:"top -250%",
        scrub:1,
        pin:true, //pin ko use krte wakt hum parent ko trigger karate hain naaki child ko
    }
})

// gsap.from("#page2 h1",{
//     opacity:0,
//     x:300,
//     duration:2,
//     // scrollTrigger:"#page2 #box", //yeh toh ho gaya upar upar se par ab scroll trigger hum dekhenge deep me....
//     scrollTrigger:{
//         trigger:"#page2 h1",
//         scroller:"body",
//         // markers:true, it shows ki kb woh animation trigger ho raha hai yaani page kaha pohochne ke baad animation ho raha hai
//         start:"top 60%",
//     }
// })
// gsap.from("#page2 h2",{
//     opacity:0,
//     x:-300,
//     duration:2,
//     // scrollTrigger:"#page2 #box", //yeh toh ho gaya upar upar se par ab scroll trigger hum dekhenge deep me....
//     scrollTrigger:{
//         trigger:"#page2 h2",
//         scroller:"body",
//         // markers:true, it shows ki kb woh animation trigger ho raha hai yaani page kaha pohochne ke baad animation ho raha hai
//         start:"top 60%",
//     }
// })