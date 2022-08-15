document.querySelector('.calcCredit').addEventListener('click', function() {
    let creditAmount = document.querySelector('.creditAmount').value;
    let creditTime = document.querySelector('.creditTime').value;
    let creditCalcRslt;

    creditCalcRslt = (creditAmount * 1.046 / creditTime);

    document.querySelector('.creditCalcResult').textContent = (`You will have to pay  per month`);
    console.log(creditCalcRslt);
})

document.querySelector('.calcDeposit').addEventListener('click', function() {
    let depositAmount = document.querySelector('.depositAmount').value;
    let depositTime = document.querySelector('.depositTime').value;

    let depositFinal;
           
    while (i=0, i<depositTime, i++) {
        depositCalcResult = (depositAmount * 1.01);
    } 
    
    document.querySelector('.depositCalc').textContent = (``);
    
})