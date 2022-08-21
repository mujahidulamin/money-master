function getInputFieldAmount(inputId) {
    const incomeAmountField = document.getElementById(inputId);
    const incomeAmountFieldString = incomeAmountField.value;
    const incomeAmount = parseFloat(incomeAmountFieldString);
    if (incomeAmount <= 0 || isNaN(incomeAmount)) {
        alert('Invalid! PLease give a number');
        return incomeAmountField.value = '';
    }
    return incomeAmount;
}
function getTextFieldById(textId, value) {
    const totalExpenseElement = document.getElementById(textId);
    totalExpenseElement.innerText = value;
}
function calculation() {
    const incomeAmount = getInputFieldAmount('income-amount');
    const foodAmount = getInputFieldAmount('food-amount');
    const rentAmount = getInputFieldAmount('rent-amount');
    const clothesAmount = getInputFieldAmount('clothes-amount');

    const totalExpense = foodAmount + rentAmount + clothesAmount;
    const balance = incomeAmount - totalExpense;

    if (isNaN(incomeAmount) || incomeAmount <= 0) {
        alert('Please Enter a number');
        return;
    }

    if (incomeAmount < totalExpense) {
        alert('You cannot exceded your amount');
        return;
    }
    getTextFieldById('total-expense', totalExpense);
    getTextFieldById('balance', balance);
    return totalExpense, balance;
}
document.getElementById('calculate').addEventListener('click', function () {
    calculation();
});

document.getElementById('save-btn').addEventListener('click', function () {
    const incomeAmount = getInputFieldAmount('income-amount');
    const savingsPercent = getInputFieldAmount('save');



    const savingAmount = incomeAmount * (savingsPercent / 100);
    const getBalance = calculation();
    const remainingBalance = getBalance - savingAmount;

    if (isNaN(savingsPercent) || savingAmount <= 0) {
        alert('Please Enter a percent number');
        return;
    }

    if (savingsPercent > 100) {
        alert('Can not save more than 100%')
        return;
    }


    if (savingAmount > getBalance) {
        alert('Can not save more than balance');
        return;
    }

    


    getTextFieldById('saving-amount', savingAmount);
    getTextFieldById('remaining-balance', remainingBalance);


});