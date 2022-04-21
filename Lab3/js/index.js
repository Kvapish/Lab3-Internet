function openovrelay(){
   document.querySelector('.overlay').classList.add('overlay_on')
    if(display=='none'){
               document.getElementById(overlay).style.display='block';
            }
}
function openbox(){
    document.querySelector('.box').classList.add('openbox')
    if(display=='none'){
               document.getElementById(box).style.display='block';
            }
}
function clear(){
   document.querySelector('.overlay').classList.remove('overlay_on');
   document.querySelector('.box').classList.remove('openbox');
}


document.querySelector('.btn').addEventListener('click',openbox);
document.querySelector('.btn').addEventListener('click',openovrelay);
document.querySelector('.overlay').addEventListener('click',clear);




