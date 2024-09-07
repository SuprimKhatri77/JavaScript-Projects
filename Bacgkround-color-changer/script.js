const buttonELement = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttonELement.forEach( (button)=>{
    button.addEventListener('click', (s)=> {
       if(s.target.id === 'grey'){
        body.style.backgroundColor = 'grey'
       }
        
       if(s.target.id === 'white'){
        body.style.backgroundColor = 'white'
       }
        
       if(s.target.id === 'blue'){
        body.style.backgroundColor = 'blue'
       }
        
       if(s.target.id === 'yellow'){
        body.style.backgroundColor = 'yellow'
       }
        
       if(s.target.id === 'red'){
        body.style.backgroundColor = 'red'
       }
        
       if(s.target.id === 'purple'){
        body.style.backgroundColor = 'purple'
       }
        
       if(s.target.id === 'green'){
        body.style.backgroundColor = 'green'
       }
        
    })
})