let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let copycode = document.querySelector('.copycode');
let rgb1 ='#004773'
let rgb2 ='#54d542'

const hexvalues = () => {
    let hexvalue ='0123456789abcdef';
    let colors = "#";
    for(let i = 0; i < 6; i++) {
       colors = colors + hexvalue[Math.floor(Math.random() * 16)];
    }
    return colors;
}

const handlebtn1 = () => {
    rgb1 = hexvalues();
    console.log(rgb1);
    document.body.style.backgroundImage=
    `linear-gradient(to right,${rgb1} , ${rgb2})`; 
    copycode.innerText=`background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
    btn1.innerText =`${rgb1}`
    btn1.style.backgroundColor=`${rgb1}`
}

const handlebtn2 = () => {
    rgb2 = hexvalues();
    console.log(rgb2); 
    document.body.style.backgroundImage=
    `linear-gradient(to right,${rgb1} , ${rgb2})`; 
    copycode.innerText=`background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
    btn2.innerText =`${rgb2}`
    btn2.style.backgroundColor=`${rgb2}`
}

btn1.addEventListener('click', handlebtn1);
btn2.addEventListener('click', handlebtn2);
copycode.addEventListener('click',()=>{
    navigator.clipboard.writeText(copycode.innerText);
    alert('color gradient copied!')
})
