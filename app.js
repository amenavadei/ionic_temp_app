const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const btnCancel = document.querySelector('#btn-cancel');
const btnConfirm = document.querySelector('#btn-confirm');
const expensesList = document.querySelector('#expenses-list');

const totalExpensesOutput = document.querySelector('#total-expenses');

let totalExpenses = 0;

//clear button
const btnClear = () =>{
   reasonInput.value = '';
   amountInput.value = ''; 
};


btnConfirm.addEventListener('click' ,() => {
  const enterReason = reasonInput.value;
  const enterInput = amountInput.value;

   if(enterReason.trim().length <=0 || enterInput <= 0 || enterInput.trim().length <=0){
       return; // if values are Invalid - stop execution 
   }
    //If values are Valid 
   
    const newItem = document.createElement('ion-item');
    newItem.textContent = enterReason + ': $ ' + enterInput;

    expensesList.appendChild(newItem);


    totalExpenses += +enterInput;
    totalExpensesOutput.textContent = ':$ ' + totalExpenses.toFixed(2);


   btnClear();

});

btnCancel.addEventListener('click', btnClear);










