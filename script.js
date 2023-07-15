var hexColor = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
var btn = document.getElementById("btn");
var color = document.getElementById('color');
btn.addEventListener('click', changeColor)

function changeColor(){
  let x ='#';
  for(var i=0; i<6;i++){
    x+=hexColor[Math.floor(Math.random()*hexColor.length)];
  }
  document.body.style.background=x;
  color.innerHTML=x
  color.style.color=x
  
}

