const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');

    if(height === '' || height <= 0 || isNaN(height)){
        result.innerHTML = 'Please enter a valid height'
    } else if(weight === '' || weight <= 0 || isNaN(weight)){
        result.innerHTML = 'Please enter a valid height'
    } else{
        const BMI = (weight / ((height*height)/1000)).toFixed(2);
       if(BMI < 18.6){
        result.innerHTML = `${BMI} , You're underweight`;
       }
       else if(BMI === 18.6 || BMI <= 24.9){
        result.innerHTML = `${BMI}, You're at normal range`;
       }

       else if(BMI > 24.9){
        result.innerHTML = `${BMI},You're overweigth`;
       }
    }
} )


