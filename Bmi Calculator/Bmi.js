 const form=document.querySelector('form');
 form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');
    const result2 = document.querySelector('#result2');
    
    if(height === "" || height < 0 || isNaN(height)){
      result.innerHTML = `Please give a valid height ${height}`;
    }
   else if(weight === "" || weight < 0 || isNaN(weight)){
      result.innerHTML = `Please give a valid weight ${weight}`;
    }
    else  {
      const bmi=(weight/(height*height))*10000;
      const bmirounded=bmi.toFixed(2);
      result.innerHTML=`<span> ${bmirounded}</span>`;

      if(bmirounded < 18.6){
        result2.innerHTML =`<span> You are Under Weight</span>`
      }
      else if(  bmirounded > 18.6 && bmirounded < 24.9){
        result2.innerHTML =`<span> You are Normal Weight</span>`
      }
      else{
        result2.innerHTML =`<span> You are over Weight</span>`;
      }
    }
 });