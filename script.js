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

numberOfSidesInput.addEventListener('input', (event) => {
    getNumberOfSidesAndGenerateShape(event.target)
});

function getNumberOfSidesAndGenerateShape(element) {
    let n = element.valueAsNumber;
    if(NaN || n) {
        generateShape(n)
    }
}

getNumberOfSidesAndGenerateShape(numberOfSidesInput)