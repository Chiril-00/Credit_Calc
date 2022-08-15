document.querySelector('.calcDeposit').addEventListener('click', function() {
    const depositAmount = document.querySelector('.depositAmount').value;
    const depositTime = document.querySelector('.depositTime').value;

    let firstYearProfit = (depositAmount * 1.01);
    
    document.querySelector('.profit').textContent = (`With 1% yearly profit, next year you will have ${firstYearProfit} on your bank account.`);
})