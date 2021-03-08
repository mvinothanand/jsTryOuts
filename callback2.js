console.log("Hi from callback2.js")

const elementToMove = document.querySelector("#btn");
// elementToMoveCurrentProp = elementToMove.getBoundingClientRect();

// elementToMove.style.transform = "translateX(100px)";

function move (element, x){
    const currentRight = element.getBoundingClientRect().right;
    const currentLeft = element.getBoundingClientRect().left;
    console.log(`Current Right is ${currentRight}`);
    const documentWidth = document.body.clientWidth;
    console.log(`Document Width is ${documentWidth}`)

    if ((currentRight + x) > documentWidth) {
        alert("Cannot mover further")
    } else {
        element.style.transform = `translateX(${currentLeft + x}px)`;        
    }
}

setTimeout(()=>{
    move(elementToMove, 100);
}, 1000);
setTimeout(()=>{
    move(elementToMove, 300);
}, 2000);
setTimeout(()=>{
    move(elementToMove, 700);
}, 3000);
setTimeout(()=>{
    move(elementToMove, 1000);
}, 4000);
setTimeout(()=>{
    move(elementToMove, 1300);
}, 5000);