const buttons = document.querySelectorAll('.cal-btn');
  const input = document.querySelector('.input');

 buttons.forEach(btn => {
  btn.addEventListener("click", () => {
   const value = btn.innerHTML;
   if(value === '='){
    input.value = eval(input.value);
   }
   else if(value === 'C'){
    input.value = '';
   }
   else{
    input.value += value;
   }
  });
});
