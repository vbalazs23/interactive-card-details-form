const nameInput = document.querySelector("#name");
nameInput.addEventListener('input', function () {
    const cardName = document.querySelector('.on-card-name');
    cardName.textContent = this.value.toUpperCase();
    if (!this.value) cardName.textContent = this.placeholder.toUpperCase().slice(5); // I could have just typed 'JOHN DOE'... but hey..
});

const numberInput = document.querySelector('#number');
numberInput.addEventListener('input', function () {
    const cardNumber = document.querySelectorAll('.on-card-number');
    cardNumber.forEach(el => el.textContent = "");  
    if (!this.value) {cardNumber.forEach(el => el.textContent = '0000')};
    const spaceRemoved = [...this.value.replace(/ /g, '')]; // If the user uses spaces while typing the card number I remove them here
    
    for (let i = 0; i < spaceRemoved.length; i++) {
        if (i <= 3) cardNumber[0].textContent += spaceRemoved[i]
        else if (i <= 7) cardNumber[1].textContent += spaceRemoved[i]
        else if (i <= 11) cardNumber[2].textContent += spaceRemoved[i]
        else if (i <= 15) cardNumber[3].textContent += spaceRemoved[i]
    }
});

const monthInput = document.querySelector('#month');
const yearInput = document.querySelector('#year');
monthInput.addEventListener('input', function () {
    const cardMonth = document.querySelector('.on-card-month');
    cardMonth.textContent = this.value + '/';
    if(!this.value) cardMonth.textContent = '00/';
});

yearInput.addEventListener('input', function () {
    const cardYear = document.querySelector('.on-card-year');
    cardYear.textContent = this.value;
    if(!this.value) cardYear.textContent = '00';
});

const cvcInput = document.querySelector('#cvc');
cvcInput.addEventListener('input', function () {
    const cardCvc = document.querySelector('.on-card-cvc');
    cardCvc.textContent = this.value;
    if(!this.value) cardCvc.textContent = '000';
});


// Form validation without Bootstrap
const form = document.querySelector('.card-data-form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    e.stopPropagation();
    document.querySelectorAll('.invalid-input-feedback').forEach(e => e.classList.add('hidden'));
    document.querySelectorAll('.form-control').forEach(e => e.style.border = '1px solid hsl(270, 3%, 87%)');

    const inputArr = [
        {
            input: nameInput,
            display: document.querySelector('#name-input-feedback'),
            minLength : 6
        },
        {
            input: numberInput,
            display: document.querySelector('#number-input-feedback'),
            minLength: 16
        },
        {
            input: monthInput,
            display: document.querySelector('#date-input-feedback'),
            minLength: 2
        },
        {
            input: yearInput,
            display: document.querySelector('#date-input-feedback'),
            minLength: 2
        },
        {
            input: cvcInput,
            display: document.querySelector('#cvc-input-feedback'),
            minLength: 3
        }
    ];
    let validatorNum = 0;

    for (let i = 0; i < inputArr.length; i++) {
        const validate = isEmpty (inputArr[i].input, inputArr[i].display, inputArr[i].minLength);
        if (validate === true) validatorNum += 1;
        
    }

    if (validatorNum === inputArr.length) isEverythingAlright();

});

function isEmpty (inputElement, inputFeedback, minLength) {
    if (!inputElement.value) {
        inputElement.style.border = '1px solid hsl(0, 100%, 66%)';
        inputFeedback.textContent = "Can't be blank";
        inputFeedback.classList.remove('hidden');
    } else if (inputElement.value.length < minLength) {
            isTooShort(inputElement, inputFeedback);
    } else if (inputElement.value && inputElement !== nameInput && !/^(\d+ )*(\d+)$/.test(inputElement.value)) { 
            isNotANum (inputElement, inputFeedback);           // ^^^ Regular expression testing (RegExp test) to see if there are numbers (with spaces allowed) only in the input              
    } else return true;
}

function isNotANum (inputElement, inputFeedback) {   
        inputElement.style.border = '1px solid hsl(0, 100%, 66%)';
        inputFeedback.textContent = "Wrong format, numbers only";
        inputFeedback.classList.remove('hidden');
}

function isTooShort (inputElement, inputFeedback) {
            inputElement.style.border = '1px solid hsl(0, 100%, 66%)';
            inputFeedback.textContent = "Too short";
            inputFeedback.classList.remove('hidden');
}

function isEverythingAlright () {
    form.classList.add('hidden');
    document.querySelector('.on-success-container').classList.remove('hidden');
}

