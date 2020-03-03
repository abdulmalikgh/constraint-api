
const firstPasswordInput = document.querySelector('#first');
const secondPasswordInput = document.querySelector('#second');
const submit = document.querySelector('#submit');
const form = document.querySelector('form');

secondPasswordInput.addEventListener('blur', function(){
    if(firstPasswordInput.value !== secondPasswordInput.value) {
        firstPasswordInput.setCustomValidity("The Two email address must match.");
    } else {
        firstPasswordInput.setCustomValidity('')
    } 
    
})

form.addEventListener('submit', function(event){
    if(form.checkValidity()  === false){
        event.preventDefault();
        return false;
    }

 event.preventDefault();
 alert('Form is valid')
})
//usign pseudo classes to provide live feedback
const inputs = document.querySelectorAll('input');
const inputsLength = inputs.length;
var addDirtyClass = function(e){
    e.srcElement.classList.toggle('dirty', true);
};
for(let i=0; i<inputsLength; i++){
    let input = inputs[i];
    input.addEventListener('blur',addDirtyClass);
    input.addEventListener('invalid',addDirtyClass);
    input.addEventListener('valid', addDirtyClass)
}