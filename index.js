let notify = document.querySelector('.notify-btn');
let input = document.querySelector('input');
let error = document.querySelector('.error-msg');

let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

notify.addEventListener('click', function(){
  let email = input.value
  if( email == '' || !email.match(pattern))
  {
    input.value = '';
    error.style.display= 'block';
    input.style.borderColor = 'hsl(354, 100%, 66%)';
    input.placeholder = 'example@email.com'
  }
  else
  {
    error.style.display = 'none';
    input.style.borderColor = 'hsl(0, 0%, 59%, .5)'
  }
});