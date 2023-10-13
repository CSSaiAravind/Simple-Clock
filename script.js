const hourE1 =document.getElementById("hour");
const minuteE1 =document.getElementById("minute");
const secondE1 =document.getElementById("second");
const pmanE1 =document.getElementById("pman");
function updateClock(){
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let pman="AM";
    if(h>12){
        h=h-12;
        pman="PM";
    }
    h=h<10?"0"+h:h;
    m=m<10?"0"+m:m;
    s=s<10?"0"+s:s;
  
    hourE1.innerText=h;
    minuteE1.innerText=m;
    secondE1.innerText=s;
    pmanE1.innerText=pman;
    setTimeout(()=>{
updateClock();
    },1000);
}
updateClock();