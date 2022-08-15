document.querySelector('.calcCredit').addEventListener('click', function() {
    const creditAmount = document.querySelector('.creditAmount').value;
    const creditTime = document.querySelector('.creditTime').value;
    
    let creditCalcRslt = (creditAmount * 1.046 / creditTime);

    document.querySelector('.creditCalcRslt').textContent = (`You will have to pay ${creditCalcRslt} per month`);
})
