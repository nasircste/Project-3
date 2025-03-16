const clock=document.getElementById('clock');


// setInterval(function(){},time ms a);
setInterval(function(){
    let date=new Date();
    //console.log(date.toLocaleTimeString());
    clock.innerHTML=(date.toLocaleTimeString());
},1000);
