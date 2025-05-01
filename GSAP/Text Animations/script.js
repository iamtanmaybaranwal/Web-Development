// var h1 = document.querySelector("h1")
// var h1Text = h1.textContent

// var splittedText = h1Text.split("")  //split text into an array of characters


// var clutter = ""  //yaha humne string ko toda hai

// splittedText.forEach(function(elem){
//     clutter +=  `<span>${elem}</span>`
// })

// console.log(clutter)

// splittedText.forEach(function(elem){
//     console.log(elem)  //elem is used to give the characters one by one 
// })

// h1.innerHTML = clutter

function breakTheText() {
    var h1 = document.querySelector("h1")
var h1Text = h1.textContent

var splittedText = h1Text.split("")  //split text into an array of characters


var clutter = ""  //yaha humne string ko toda hai

splittedText.forEach(function(elem){
    clutter +=  `<span>${elem}</span>`
})

h1.innerHTML = clutter
}

breakTheText()

gsap.from("h1 span", {
    y : 50,
    duration : 0.8,
    delay : 0.5,
    opacity : 0,
    stagger : 0.15,
})