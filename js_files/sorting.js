function swap(el1, el2) {
    console.log('In swap()');
    
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
    
}

function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}

var array = [];
createNewArray();
function createNewArray() {
    deleteChild();

    // creating an array of random numbers 
    array = [];
    for (let i = 0; i < 100; i++) {
        array.push(Math.floor(Math.random() * 400) + 1);
    }
    console.log(array);

    // select the div #bars element
    const bars = document.querySelector("#bars");

    // create multiple element div using loop and adding class 'bar col'
    for (let i = 0; i < 100; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i]}px`;
        //bar.style.transform = `translateX(${i * 3}px)`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        //bar.classList.add("col");
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}
// Helper function to delete all the previous bars so that new can be added
function deleteChild() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}

// selecting newarray button from DOM and adding eventlistener
const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", createNewArray);
