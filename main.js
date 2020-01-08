const container = document.querySelector('div.container');

function changeColor(e) {
    e.target.style.backgroundColor = 'black';

}

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const div = document.createElement("div");
        div.addEventListener('mouseover', changeColor)
        container.appendChild(div);
    }
    const jump = document.createElement("br");
    container.appendChild(jump);
}
