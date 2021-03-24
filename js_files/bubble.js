async function bubble() {
    console.log('In bubbe()');
    const ele = document.querySelectorAll(".bar");
    for(let i = 0; i < ele.length-1; i++){
        console.log('In ith loop');
        for(let j = 0; j < ele.length-i-1; j++){
            console.log('In jth loop');
            ele[j].style.background = 'blue';
            ele[j+1].style.background = 'blue';
            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
                console.log('In if condition');
                await waitforme(delay);
                swap(ele[j], ele[j+1]);
            }
            ele[j].style.background = 'cyan';
            ele[j+1].style.background = 'cyan';
        }
        ele[ele.length-1-i].style.background = 'green';
    }
    ele[0].style.background = 'green';
}

const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener('click', bubble);


/* const ele = document.querySelectorAll(".bar");
console.log(ele[0].style.height);
console.log(ele[1].style.height);
let temp = ele[0].style.height;
ele[0].style.height = ele[1].style.height;
ele[1].style.height = temp;
console.log(ele[0].style.height);
console.log(ele[1].style.height);

console.log(typeof(temp));
temp = parseInt(temp);
console.log(typeof(temp));
 */