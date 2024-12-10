document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();
    // const addMoney = document.getElementById('input-add-money').value;
    //     const addMoney = getInputFieldValueById();
    //     console.log(addMoney);

    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumbwer = getInputFieldValueById('input-pin-number');
    console.log(addMoney, pinNumbwer);
})