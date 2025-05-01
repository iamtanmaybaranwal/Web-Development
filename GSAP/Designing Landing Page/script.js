function page1animation() {
    var tl = gsap.timeline();

tl.from("nav h1, nav h4, nav button", {
    y : -40,
    opacity : 0,
    duration : 0.7, 
    delay : 0.5,
    stagger : 0.15,
})

tl.from(".center-1 h1", {
    x : -250,
    opacity : 0,
    duration : 0.5,
})
tl.from(".center-1 p", {
    x : -100,
    opacity : 0,
    duration : 0.4,
})

tl.from(".center-1 button", {
    opacity : 0,
    duration : 0.4,
})

tl.from(".center-2 img", {
    opacity : 0,
    duration : 0.5,
    x : 200,
},"-=0.5")  //yaha pr -=0.5 ka matlab hai ki jo animation abhi ho raha hai wo 0.5 sec pehle shuru ho jaayega

tl.from(".section1bottom img", {
    opacity : 0,
    y : 40,
    stagger : 0.15,
    duration : 0.8,
    scrollTrigger:{
        trigger:".section1bottom img",
        scroller:"body",
        start:"top 90%",
        end:"top 70%",
        scrub:2, 
        // markers:true,
    }
})
}
page1animation()

function page2animation() {
    var tl2 = gsap.timeline({
        scrollTrigger : {
        trigger : ".section2",
        scroller : "body",
        // start:"top 90%",
        // end:"top 70%",
        start : "top 50%",
        end : "top -75%",
        scrub:2, 
    }})
    
    tl2.from(".services", {
        x : -300,
        opacity : 0,
        duration : 0.5,
        stagger : 0.15,
    })
    
    tl2.from(".elem.line1.left", {
        x : -300,
        opacity : 0,
        duration : 1,
    },"anim")
    tl2.from(".elem.line1.right", {
        x : 300,
        opacity : 0,
        duration : 1,
    },"anim")
    
    tl2.from(".elem.line2.left", {
        x : -300,
        opacity : 0,
        duration : 1,
        delay : 0.5
    },"anim2")
    tl2.from(".elem.line2.right", {
        x : 300,
        opacity : 0,
        duration : 1,
        delay : 0.5
    },"anim2")
    
    tl2.from(".elem.line3.left", {
        x : -300,
        opacity : 0,
        duration : 1,
        delay : 0.5
    },"anim3")
    tl2.from(".elem.line3.right", {
        x : 300,
        opacity : 0,
        duration : 1,
        delay : 0.5
    },"anim3")    
}

page2animation()





