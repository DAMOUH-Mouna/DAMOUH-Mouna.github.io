let hiddenNavigation=document.getElementById("hiddenNavigation");
let menuButton=document.getElementById("menuButton");




let tmp=1 //on clique pour afficher
function BarMenu(){
    
    if(tmp==1){
      hiddenNavigation.style.display="block"  
      menuButton.innerText="hide menu"  
      tmp=0;
    }
    else{
        res();
    }
}
function res() {
    hiddenNavigation.style.display="none" 
    menuButton.innerText="show menu"  
    tmp=1;
}
window.onresize=res;
//document.body.onclick=res;
hiddenNavigation.onclick=res;