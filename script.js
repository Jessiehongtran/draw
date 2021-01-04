let theColor = "grey"

function getColor(color){
    theColor= color
    console.log(theColor)
}

function draw(event){
    const displayComp = document.getElementsByClassName("display")[0]
    console.log(event.clientX, event.clientY)
    console.log(displayComp)
    var circle = document.createElement("div");
    circle.style.backgroundColor=theColor;
    circle.style.position="absolute"
    circle.style.left= event.clientX + 'px';
    circle.style.top = event.clientY + 'px';
    circle.style.width = '10px';
    circle.style.height = '10px';
    circle.style.borderRadius= '50%';
    console.log('circle', circle)
    displayComp.appendChild(circle)
}
