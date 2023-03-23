let input = document.getElementById('phone');
  input.addEventListener('keydown', function(event) {
   let value = this.value.replace(/\D/g,'');
   let keyValue = event.key.replace(/\D/g,'');
   let pattern = '+7 (___) ___ --';
   let lastChar = pattern.substring(value.length,value.length+1);
   if (lastChar !== keyValue && value.length < pattern.length) {
    event.preventDefault();
   }
   if (event.key === 'Backspace' && value.length < pattern.length) {
    event.preventDefault();
   }
  });