document.getElementById('btn-withdraw').addEventListener('click', function() {
    const withdrawField = document.getElementById('withdraw-field')
    const newWithdrawamountString = withdrawField.value;
    const newWithdrawamount = parseFloat(newWithdrawamountString);

    withdrawField.value = '';

    if (isNaN(newWithdrawamount)) {
        alert('please provide a valid number');
        return;
    }

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previouswithdrawTotalString = withdrawTotalElement.innerText;
    const previouWithdrawTotal = parseFloat(previouswithdrawTotalString);



    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);




    if (newWithdrawamount > previousBalanceTotal) {
        alert('Baap er bank e eto Taka nai');
        return;
    }

    const currentWithdrawTotal = previouWithdrawTotal + newWithdrawamount;
    withdrawTotalElement.innerText = currentWithdrawTotal;



    const currentBalanceTotal = previousBalanceTotal - newWithdrawamount;
    balanceTotalElement.innerText = currentBalanceTotal;




})