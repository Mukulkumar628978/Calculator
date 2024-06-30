document.addEventListener("DOMContentLoaded", function() {
    const result = document.getElementById('Result');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.value;

            if (value === '=') {
                try {
                    currentInput = eval(currentInput).toString();
                } catch (e) {
                    currentInput = 'Error';
                }
                result.value = currentInput;
            } else if (value === 'C') {
                currentInput = '';
                result.value = '';
            } else if (value === 'X') {
                currentInput = currentInput.slice(0, -1);
                result.value = currentInput;
            } else {
                currentInput += value;
                result.value = currentInput;
            }
        });
    });
});
