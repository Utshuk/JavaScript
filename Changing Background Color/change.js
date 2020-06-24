let color = document.querySelector(".color"); //selecting class name color
var body = document.querySelector("body"); // selecting body

color.addEventListener('keyup',function(event){
    body.style.backgroundColor = event.target.value
});