document.querySelector('.calcDeposit').addEventListener('click', function() {
    let depositAmount = document.querySelector('.depositAmount').value;
    let depositTime = document.querySelector('.depositTime').value;

    let firstYearProfit = (depositAmount * 1.01);
    
    for (i=1; i <= depositTime; i++) {
        depositAmount *= 1.01;
    }

    document.querySelector('.profit').textContent = (`With 1% yearly profit, next year you will have ${firstYearProfit} on your bank account.`);
    document.querySelector('.finalProfit').textContent = (`With 1% yearly profit, by the end of ${depositTime} years period, you will have ${depositAmount} on your bank account.`);

})