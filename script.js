const root = document.querySelector(':root');
let shapeContainter = document.querySelector('.shape');

function generateShape(n) {
    root.style.setProperty('--n', n)

    shapeContainter.replaceChildren();

    for (let i = 0; i < n; i++) {
        let div = document.createElement('div');
        
        div.classList.add('base');

        div.style.setProperty('--index', i);

        shapeContainter.appendChild(div);
    }

    for (let i = 0; i < n; i++) {
        let div = document.createElement('div');
        
        div.classList.add('side');

        div.style.setProperty('--index', i);

        shapeContainter.appendChild(div);
    }
}

let numberOfSidesInput = document.querySelector('#number-of-sides');
let widthInput = document.querySelector('#width');
let heightInput = document.querySelector('#height');

let inputs = [numberOfSidesInput, widthInput, heightInput]

let unitInput = document.querySelector('#unit');

inputs.forEach(element => {
    element.addEventListener('input', (event) => {
        updateShape(numberOfSidesInput.valueAsNumber, widthInput.valueAsNumber, heightInput.valueAsNumber)
    })
})

function updateShape(n, width, height) {
    root.style.setProperty('--shape-width', width);
    root.style.setProperty('--shape-height', height);
    generateShape(n)
    
}

unitInput.addEventListener('input', event => {
    root.style.setProperty('--unit', 1 + event.target.value)
})

updateShape(...(inputs.map(el => el.valueAsNumber)))