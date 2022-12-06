function createGridSquare() 
{
    const currentElement = document.createElement('div')

    currentElement.classList.add('square')

    return currentElement;
}

let grid = document.getElementById('grid');

let button_first = document.getElementById('play')
button_first.addEventListener('click',function () {
        
    for (let i = 1; i <= 100; i++) {
        let containerSquare = document.getElementById('container')
        let currentSquare = createGridSquare();
        
        currentSquare.addEventListener('click',function () {
        this.classList.add('clicked');
    })

        grid.appendChild(currentSquare);
    }
})