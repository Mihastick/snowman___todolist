let dragItems = document.querySelector('#snowman', '#mouth03', '#neck01', '#neck03', '#neck04', '#neck05', '#hand_left01', '#hand_right01', '#hand_left02', '#hand_right02', '#eyes01', '#eyes02', '#eyes03', '#eyes05', '#nose01', '#nose02', '#head02', '#head03', '#head05', '#head06');

let x = 0;
let y = 0;

let cont = document.getElementById('container');

document.body.addEventListener('dragstart',moveStart);
document.body.addEventListener('dragover',moveDragOver);
document.body.addEventListener('drop',moveDrop);

function moveStart(e){
    dragItems = e.target;

    x = e.offsetX;
    y = e.offsetY;

    dragItems.style.zIndex = 10;
}

function moveDrop(e){
    e.preventDefault();
    dragItems.style.left = (e.pageX - x) - 150 + 'px';
    dragItems.style.top = (e.pageY - y) + 1  + 'px';
}

function moveDragOver(e){
    e.preventDefault();
    resetZIndex();
}

function resetZIndex(){
    dragItems.style.zIndex = 5;
}