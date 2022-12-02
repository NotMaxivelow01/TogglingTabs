const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const champ = document.getElementById('Selects');
// const option1 = document.getElementById('option1');
// const option2 = document.getElementById('option2');
// const option3 = document.getElementById('option3');
console.log(champ.value);
let last = '';

let lastSelected = '';


function On(btn) {
    btn.style.backgroundColor = "#5796ff";
    btn.style.color = "white";
}

function Off(btn) {
    btn.style.backgroundColor = "white";
    btn.style.color = "black";
}


button1.addEventListener("click", () => {
    if (lastSelected !== "") {
        Off(document.getElementById(lastSelected));
        On(button1);
        lastSelected = "button1";
    } else {
        On(button1);
        lastSelected = "button1";
    }
    champ.value = button1.value
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
    champ.value = button2.value
})
button3.addEventListener("click", () => {
    if (lastSelected !== "") {
        Off(document.getElementById(lastSelected));
        On(button3);
        lastSelected = "button3";
    } else {
        On(button3);
        lastSelected = "button3";
    }
    champ.value = button3.value
})

champ.addEventListener('click', () => {
    if (champ.value === "Sortbyname") {
        On(button2);
        Off(button1);
        Off(button3);
        lastSelected = "button2"
    } else if (champ.value === "Sortbyprice") {
        On(button1);
        Off(button2);
        Off(button3);
        lastSelected = "button1"
    } else if (champ.value === "Sortbyrelevance") {
        On(button3);
        Off(button2);
        Off(button1);
        lastSelected = "button3"
    }
});

