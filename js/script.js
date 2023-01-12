const inputs = document.querySelectorAll(".input");
const button = document.querySelector(".login__button")
const input =  document.querySelector("#viego")

const handleFocus = ({ target }) => {
    const span = target.previousElementSibling;
    span.classList.add("span-active")
}

const handleFocusout = ({target}) => {
    if (target.value === ""){
    const span = target.previousElementSibling;
    span.classList.remove("span-active");
}
}

const handleChange = () =>{
    const [username, password] = inputs;

    if (username.value && password.value.length >= 8){
    button.removeAttribute("disabled");

} else {
    button.setAttribute('disabled', '');
  }
}


inputs.forEach((input) => input.addEventListener("focus", handleFocus));
inputs.forEach((input) => input.addEventListener("focusout", handleFocusout));

inputs.forEach((input) => input.addEventListener("input", handleChange));
inputs.forEach((input) => input.addEventListener("input", handleChange));


var audio = document.getElementById("viego");

function pauseAudio(){
    audio.play();
    
}
  



setTimeout(function(){
    document.getElementById("viego5").play();
    
  }, 40000)

/*
setTimeout(function(){
    document.getElementById("viego").play();
    document.getElementById("viego").muted= false;
    
    
}, 4000)

*/
/*

 minhaMusica = new Audio();



minhaMusica.src = './music/viego.mp3'
minhaMusica.currentTime = 0;
minhaMusica.play();

*/
