function main(n) {
    const root = document.querySelector(':root');
    root.style.setProperty('--n', n)

    for (let i = 0; i < n; i++) {
        let div = document.createElement('div');
        
        div.classList.add('base');

        div.style.setProperty('--index', i);

        document.querySelector('.shape').appendChild(div);
    }

    for (let i = 0; i < n; i++) {
        let div = document.createElement('div');
        
        div.classList.add('side');

        div.style.setProperty('--index', i);

        document.querySelector('.shape').appendChild(div);
    }
}

main(8)