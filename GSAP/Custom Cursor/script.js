var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var image = document.querySelector("#image")

main.addEventListener("mousemove", function(dets){ //dets are used to pass any value
    gsap.to(cursor, {
        x : dets.x,
        y : dets.y,   
        duration : 1,
        ease : "back.out",
    })
})

image.addEventListener("mouseenter", function(){
    cursor.innerHTML = "View More"

    gsap.to(cursor, {
        scale : 3,
        backgroundColor : "#ffffff8a",
    })
})
image.addEventListener("mouseleave", function(){
    cursor.innerHTML = ""

    gsap.to(cursor, {
        scale : 1,
        backgroundColor : "#fff",
    })
})