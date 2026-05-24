if(!localStorage.getItem('coins')){
localStorage.setItem('coins',500);
}

function startGame(){
window.location='home.html';
}

setInterval(()=>{
const online = Math.floor(Math.random()*5000)+2000;
const el = document.getElementById('onlineCount');
if(el){
el.innerText = online + " Players Online";
}
},2000);
