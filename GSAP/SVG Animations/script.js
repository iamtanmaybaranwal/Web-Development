var path = `M 10 100 Q 750 100 1350 100`

var finalPath = `M 10 100 Q 750 100 1350 100`

var event = document.querySelector("#string")

// string.addEventListener("mouseenter", function () {
//     console.log("entered")
// })
// string.addEventListener("mouseleave", function () {
//     console.log("leaved")
// })
string.addEventListener("mousemove", function (dets) {
    path = `M 10 100 Q ${dets.x} ${dets.y} 1350 100`

    gsap.to("svg path", {
        attr : { d : path},
        duration : 0.2,
        ease : "power3.out", //gsap easing pr jao agar atakte ho toh
    })

})  

string.addEventListener("mouseleave",function(){
    gsap.to("svg path", {
        attr : {d:finalPath},
        duration : 1.8,
        ease : "elastic.out(1,0.2)",
    })
})