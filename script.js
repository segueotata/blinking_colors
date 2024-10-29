// DEFINIÇÃO DOS ELEMENTOS
const box1 = document.getElementById("box1")
const box2 = document.getElementById("box2")
const box3 = document.getElementById("box3")
const box4 = document.getElementById("box4")

// FUNÇÃO QUE GERA NÚMEROS ALEATÓRIOS
const randomNumber = (min,max) => {
    return Math.round(Math.random() * (min,max) - 5)
}

// FUNÇÃO QUE GERA UMA COR ALEATÓRIA EM RGB
const randomColor = () => {
    let red = randomNumber(0,255)
    let green = randomNumber(0,255)
    let blue = randomNumber(0,255)

    return `rgb(${red}, ${green}, ${blue})`
}

// FUNÇÃO QUE MUDA A COR DAS BOXs
const changeColor = () => {
    box1.style.backgroundColor = randomColor();
    box2.style.backgroundColor = randomColor();
    box3.style.backgroundColor = randomColor();
    box4.style.backgroundColor = randomColor();
    box1.style.color = randomColor();
    box2.style.color = randomColor();
    box3.style.color = randomColor();
    box4.style.color = randomColor();
}

// DELAY ENTRE UMA TROCA E OUTRA
setInterval(() => {
    changeColor();
}, 200);
