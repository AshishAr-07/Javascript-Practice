const clock=document.querySelector('#clock'); 
 let showdate =setInterval(function(){
    let date= new Date();
    clock.innerHTML = date.toLocaleTimeString();
    
},1000)
