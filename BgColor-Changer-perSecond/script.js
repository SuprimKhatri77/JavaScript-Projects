const randomColor = ()=>{
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}
// console.log(randomColor());
let intervalId;
const startChangingColor = ()=>{
    function changeBodyColor(){
        document.body.style.backgroundColor = randomColor();
    };
    if(!intervalId){
        intervalId = setInterval(changeBodyColor,1000);
        return;
    }
};
const stopChangingColor = ()=>{
    clearInterval(intervalId);
    intervalId = null;
}

document.querySelector('#start').addEventListener('click', startChangingColor)
document.querySelector('#stop').addEventListener('click', stopChangingColor)
