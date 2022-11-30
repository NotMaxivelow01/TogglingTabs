const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');

const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');

let last = '';

let lastSelected = '';

function On(btn) {
    btn.style.backgroundColor = "#5796ff";
    btn.style.color = "white";
    btn.style.border = "solid #d9e6fc 2px";
}

function Off(btn) {
    btn.style.backgroundColor = "white";
    btn.style.color = "black";
    btn.style.border = "solid #5796ff 2px";
    
}

function Unselected (btn) {
    btn.style.backgroundColor = "#5796ff";
    btn.style.color = "white";
}

button1.addEventListener("click", () => {
    if (lastSelected !== "") {
        Off(document.getElementById(lastSelected));
        On(button1);
        lastSelected = "button1";
        Unselected(option1)
    } else {
        On(button1);
        lastSelected = "button1";
    }
    console.log(lastSelected);
})

button2.addEventListener("click", () => {
    if (lastSelected !== "") {
        Off(document.getElementById(lastSelected));
        On(button2);
        lastSelected = "button2";
    } else {
        On(button2);
        lastSelected = "button2";
    }
    console.log(lastSelected);
})
button3.addEventListener("click", () => {
    if (lastSelected !== "") {
        Off(document.getElementById(lastSelected));
        On(button3);
        lastSelected = "button3";
    } else {
        On(button3);
        lastSelected = 'button3';
    }
 
    console.log(lastSelected);
})
button1.style.hover.backgroundColor = "#d9e6fc";

// option1.addEventListener("click", () => {
    
// })