document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();

    const addmoney = getInputFieldValueById('input-add-money');
    const pinNumbwer = getInputFieldValueById('input-pin-number');

    if (isNaN(addmoney)) {
        alert('Failed to add money');
        return;
    }

    if (pinNumbwer === 1234) {
        const balance = textFieldValueById('account-balance');
        const newBalance = balance + addmoney;
        document.getElementById('account-balance').innerText = newBalance;

        // transaction history
        const p = document.createElement('p');
        p.innerText = `added: ${addmoney} tk. new balance: ${newBalance}`
        console.log(p);
        document.getElementById('transaction-container').appendChild(p);
    }
    else {
        alert('failed to add money');
    }
})