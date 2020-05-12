// create hexcolor code generator
// use dom to insert hexcolor to background color of body

//creates an array of all hexcolor values
const alphabet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'a', 'b', 'c', 'd', 'e', 'f'];

// make random number between 1 and 16


//generates full hexcolor code
function generateHexcolor() {
    let color = '#';
    let randomInt = function() {
        return Math.floor(Math.random() * 16)
    }
    for (i = 0; i<6; i++) {
        color += alphabet[randomInt()];
    }
    return color;
}



let button = document.getElementById('button');
let body = document.getElementById('body');
button.addEventListener('click', function(){
    body.style.backgroundColor = `${generateHexcolor()}`;
});

