document.getElementById('btn-deposit').addEventListener('click', function() {
    const depositField = document.getElementById('deposit-field')
    const newdepositamountString = depositField.value;
    const newdepositamount = parseFloat(newdepositamountString);

    const depositTotalElement = document.getElementById('deposit-total');
    const previousdepositTotalString = depositTotalElement.innerText;
    const previousdepositTotal = parseFloat(previousdepositTotalString);


    const currentdepositTotal = previousdepositTotal + newdepositamount;
    depositTotalElement.innerText = currentdepositTotal;
    depositField.value = '';




    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal + newdepositamount;
    balanceTotalElement.innerText = currentBalanceTotal;
})