const btn = document.querySelector('.btn');

var active = false,
    currentX,
    currentY,
    initialX,
    initialY,
    xOffset = 0,
    yOffset = 0;

document.addEventListener('mousedown', dragStart, false);
document.addEventListener('mouseup', dragEnd, false);
document.addEventListener('mousemove', drag, false);

function dragStart(e) {
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;

    if (e.target === btn) {
        active = true;
    }
}

function dragEnd(e) {
    initialX = currentX;
    initialY = currentY;

    active = false;
}

function drag(e) {
    if (active) {

        e.preventDefault();

        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;

        xOffset = currentX;
        yOffset = currentY;

        setTranslate(currentX, currentY, btn);
    }
}

function setTranslate(xPosition, yPosition, element) {
    element.style.transform = "translate3d(" + xPosition + "px, " + yPosition + "px, 0)";
}