document.getElementById('btn-cash-out').addEventListener('click', function (event) {
    event.preventDefault();

    const cashOut = getInputFieldValueById('input-cash-out');
    const pinNumber = getInputFieldValueById('input-cash-out-pin');

    if (isNaN(cashOut)) {
        alert('Faild to cash out');
        return;
    }

    if (pinNumber === 1234) {
        const balance = textFieldValueById('account-balance');

        if (cashOut > balance) {
            alert('You do not have enough money.');
            return;
        }

        const newBalance = balance - cashOut;
        document.getElementById('account-balance').innerText = newBalance;

        // cash out history
        const div = document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.innerHTML = `
            <h4 class="text-2xl font-bold">Cash Out</h4>
            <p>${cashOut} Withdraw. new Balance ${newBalance}</p>
        `
        document.getElementById('transaction-container').appendChild(div);
    }
    else {
        alert('dure gea mor');
    }
})