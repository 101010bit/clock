function myTime(){
    const d = new Date();
    document.getElementById("all").innerHTML = d;    
}

setInterval(myTime, 1000);
myTime();