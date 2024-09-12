const passwdInput = document.getElementById('password');
const lengthcondtn = document.getElementById('length');
const casecondtn = document.getElementById('uppercase');
const symbolcondtn = document.getElementById('symbol');
const numbercondtn = document.getElementById('number');
const spacecondtn = document.getElementById('space');
const buttonpress = document.getElementById('visibility');

passwdInput.addEventListener('input', function(){
    const password = passwdInput.value;

    if (password.length == 0){
        lengthcondtn.classList.add('hidden');
        casecondtn.classList.add('hidden');
        symbolcondtn.classList.add('hidden');
        spacecondtn.classList.add('hidden');
        numbercondtn.classList.add('hidden');
    }else{
        lengthcondtn.classList.remove('hidden');
        casecondtn.classList.remove('hidden');
        symbolcondtn.classList.remove('hidden');
        spacecondtn.classList.remove('hidden');
        numbercondtn.classList.remove('hidden');
        lengthcondtn.classList.add('unmet');
        casecondtn.classList.add('unmet');
        symbolcondtn.classList.add('unmet');
        spacecondtn.classList.add('unmet');
        numbercondtn.classList.add('unmet');
    }

    checkConditions(password);
});

buttonpress.addEventListener('click', function() {

    // Check the current type of the input field
    const type = passwdInput.getAttribute('type') === 'password' ? 'text' : 'password';
    // Toggle the type attribute
    passwdInput.setAttribute('type', type);
    // Change the button text accordingly
    buttonpress.textContent = type === 'password' ? 'Show Password' : 'Hide Password';
});

function checkConditions(password) {

    if (password.length >= 8 && password.length <= 20) {
        lengthcondtn.textContent = '✓ Password must be 8-20 characters';
        lengthcondtn.classList.remove('unmet');
        lengthcondtn.classList.add('met');
    }else{
        lengthcondtn.textContent = '✗ Password must be 8-20 characters';
        lengthcondtn.classList.remove('met');
        lengthcondtn.classList.add('unmet');
    }

    if (/[A-Z]/.test(password)){
        casecondtn.textContent = '✓ Add one Uppercase letter';
        casecondtn.classList.remove('unmet');
        casecondtn.classList.add('met');
    }else{
        casecondtn.textContent = '✗ Add one Uppercase letter';
        casecondtn.classList.remove('met');
        casecondtn.classList.add('unmet');
    }

    if (/[0-9]/.test(password)){
        numbercondtn.textContent = '✓ Add at least one number';
        numbercondtn.classList.remove('unmet');
        numbercondtn.classList.add('met');
    }else{
        numbercondtn.textContent = '✗ Add at least one number';
        numbercondtn.classList.remove('met');
        numbercondtn.classList.add('unmet');
    }

    if (/[!@#$%^&*(),.?:{}]/.test(password)){
        symbolcondtn.textContent = '✓ Add special characters Example: +,_,!,@';
        symbolcondtn.classList.remove('unmet');
        symbolcondtn.classList.add('met');
    }else{
        symbolcondtn.textContent = '✗ Add special characters Example: +,_,!,@';
        symbolcondtn.classList.remove('met');
        symbolcondtn.classList.add('unmet');
    }
    if (/\s/.test(password)) {
        spacecondtn.textContent = '✗ No spacing';
        spacecondtn.classList.remove('met');
        spacecondtn.classList.add('unmet');
    } else {
        spacecondtn.textContent = '✓ No spacing';
        spacecondtn.classList.remove('unmet');
        spacecondtn.classList.add('met');
    }
}