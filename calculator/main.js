const calculator = document.querySelector('.calculator');
const mainForm = calculator.querySelector('.mainForm');
const data = mainForm.querySelectorAll('input');
//const btn = mainD.querySelector('button');
const display = document.querySelector('.displayNum');

for(let i=0; i<data.length; i++) {
    data[i].addEventListener('click', calc, false);
    function calc(e) {
        let target = e.target;
        
        if(target.value === '지움') {
            display.value = '';
        }
        else if(target.value === '=') {
            display.value = eval(display.value);
        }
        else {
            display.value += target.value;
        }
    }
}

