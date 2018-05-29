var canvasElem = document.getElementById("canvas");

var maxColors =50;
var colorsData = [];
var classes = []
giveColors();
function Color(colors){
    this.color =colors;
    this.dimentions={};
    this.elem;
    var elem = document.createElement('div');
    elem.className = "color-pane"
    elem.style.height = this.dimentions.height || '40px';
    elem.style.width = this.dimentions.width || '40px';
    elem.style.backgroundColor = 'rgb(' +  this.color.red + ',' +this.color.blue + ',' + this.color.green + ')';
  
    this.elem = elem;
    
    this.copyColor=function (){
       console.log(this.color);
    }
    this.removeColor = function(elm) {
      canvasElem.removeChild(this)
    }
    this.onmouseOver = function (){
        this.style.height = '80px';
        this.style.width = '80px';
    }
    this.onmouseOut = function (){
        this.style.height =  '40px';
        this.style.width =  '40px';
    }
    elem.onclick =  this.removeColor;
    elem.onmouseover =  this.onmouseOver;
    elem.onmouseout =  this.onmouseOut;
    canvasElem.appendChild(elem);
} 

function giveColors(){
    for(i=0; i<maxColors;i++){
        classes.push(  new Color({'red':Math.floor(Math.random()*255),'green':Math.floor(Math.random()*255),'blue':Math.floor(Math.random()*255)}));
    }
    classes[3].elem.onmouseover= function (){
        console.log("No Nothing happens")
    }
}



