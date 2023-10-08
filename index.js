// detecting button press

for (i = 0; i<document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function handleClick() {
        
        var buttonInnerHTML = this.innerHTML

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
    });
}

// keyboard press

document.addEventListener("keypress", function(event) {

    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
    
            case "a": 
            var tom2 = new Audio("sounds/tom-3.mp3");
            tom2.play();
            break;

            case "s":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
            break;

            case "d":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
            break;

            case "j":
                var kick = new Audio ("sounds/kick-bass.mp3");
                kick.play();
            break;

            case "k": 
            var tom4 = new Audio ("sounds/tom-4.mp3");
            tom4.play();
            break;

            case "l": 
            var tom2 = new Audio ("sounds/tom-2.mp3");
            tom2.play();
            break;

        default: console.log(buttonInnerHTML);
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed"); // we connected the js with the css

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100); // setting timeout for function
}

