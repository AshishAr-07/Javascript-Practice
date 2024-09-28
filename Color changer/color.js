let body=document.querySelector('body');
let button=document.querySelector('button')
let color=true;
button.innerHTML='Dark Mode';
button.addEventListener('click',function(){
    if(color ){
        body.style.backgroundColor= 'black';
        button.innerHTML='Light Mode';
        color=false;
    }
   else{
        body.style.backgroundColor= 'white';
        button.innerHTML='Dark Mode';
        color=true;
    }
})