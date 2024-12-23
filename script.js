const form= document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault()
    const height=parseInt(document.querySelector('#height').value)
    const Weight=parseInt(document.querySelector('#Weight').value)
    const result=document.querySelector('#res')

    if (height===""||height<0||isNaN(height)) {
        result.innerHTML=`please give a valid height ${height}`;
    }
    else if (Weight===""||Weight<0||isNaN(Weight)) {
        result.innerHTML=`please give a valid height ${Weight}`;
    }
    else{
        const bmi=(Weight/((height*height)/1000)).toFixed(2);
        result.innerHTML=` BMI:<span>${bmi}</span>`
    }

})