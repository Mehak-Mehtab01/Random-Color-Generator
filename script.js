let button = document.getElementById('changebutton');
let number = '0123456789ABCDEF';
button.onclick = () =>{
    let color = '#';
   for(let i = 0 ; i< 6; i++){
    color += number[ Math.floor(Math.random()*number.length)];
   }
   document.body.style.backgroundColor = color
}
 