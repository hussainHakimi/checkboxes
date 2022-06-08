const checkboxes = document.querySelectorAll('input[type="checkbox"]');

function handleCheck(e){
  let inBetween = false;
  if(e.shiftKey && this.checked ){
    checkboxes.forEach(checkboxe => {
      if(checkboxe === this || checkboxe === lastCheck){
        inBetween = !inBetween;
      }
      if(inBetween){
        checkboxe.checked = true;
      }
    });
  }
  lastCheck = this
}
checkboxes.forEach(checkboxe => checkboxe.addEventListener('click', handleCheck));