document.getElementById('cash-out-btn').addEventListener('click',
function(event){
    event.preventDefault();
    const pin = document.getElementById('cash-out-pin').value;
    const convertedPin = parseInt(pin);
    const amount = document.getElementById('cash-out-amount').value;
    const convertedAmount = parseFloat(amount);
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    if(amount && pin){
        if(convertedPin === 1234){
            const sum = convertedMainBalance - convertedAmount;
            document.getElementById('main-balance').innerText = sum;
        }
        else{
            alert('Wrong PIN');
        }
    }
    else{
        alert('Enter Amount');
    }
})