// let submit = document.querySelector('#submit');
// submit.addEventListener('click', function (e) {
//     e.preventDefault();

//     let title = document.querySelector('#title').value;
//     let task = document.querySelector('#task').value;
//     let content = document.querySelector('#content');
//     if (task != "" && title != "") {
//         content.innerHTML = `<h1>${title}</h1><p>${task}</p>`;

//         document.querySelector('#title').value = "";
//         document.querySelector('#task').value = "";
//         let removebtn = document.createElement('button');
//         removebtn.setAttribute('id', 'removecontent');
//         removebtn.textContent = 'Click Me';
//         removebtn.style.backgroundColor = "red";


//         content.append(removebtn);

//         removebtn.addEventListener('click', function () {
//           content.remove();
//         })


//     }
//     else {
//         content.innerHTML = "Please Insert Values";
//     }
// }) 

let submit = document.querySelector('#submit');


submit.addEventListener('click', function(e){
    e.preventDefault();
    let title = document.querySelector('#title');
    let task = document.querySelector('#task');
    let content = document.querySelector('#content');
     if (task != "" && title !=""){
        
         let H3=document.createElement('H3');
         let H1=document.createElement('H1');
         H1.innerHTML= title.value;  
         H3.innerHTML= task.value; 
         content.appendChild(H1); 
         content.appendChild(H3);
         document.querySelector('#title').value = "";
         document.querySelector('#task').value = "";
         let rmvbtn=document.createElement('button');
         rmvbtn.textContent="Remove" 
         content.append(rmvbtn);
         
         rmvbtn.addEventListener('click' , function(){
            H1.remove()
            H3.remove()
            rmvbtn.remove()
         })
     }
     else{
        content.innerHTML = "Please Insert Task";
     }


})
