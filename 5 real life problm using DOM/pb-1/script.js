var str = document.querySelector("h4");
var button = document.querySelector("button");
var num = 1;

button.addEventListener("click", function(){
    if (num == 1) {
        str.innerHTML = "Friends";
        str.style.color = "Green";
        num = 0;
        button.innerHTML = "Remove";
        button.style.backgroundColor = "grey";
    }
    else{
        str.innerHTML = "Stranger"
        str.style.color = "Red";
        num = 1;
        button.innerHTML = "Add Friend";
        button.style.backgroundColor = "cadetblue";
    }
});
