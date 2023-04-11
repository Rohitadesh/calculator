let number_btn=document.querySelectorAll('.button')
let input=document.querySelector('.screen')
let new_value
let calculation_value='';
number_btn.forEach(btn=>btn.addEventListener('click',(btn)=>{
    let new_value=btn.target.innerText
    if(new_value =='C'){
        input.value='';
    }
    else if (new_value == "="){
        calculation_value=eval(calculation_value)
        input.value=calculation_value;
     }
    // console.log(new_value)
    else{
        calculation_value+=new_value
        input.value=calculation_value;
    }
    
   
}));