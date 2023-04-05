// class
class Budget {
    constructor(budget) {
        this.budget = budget;

    }
}


// everything related to the html
class HTML {

    // insert user budget to the html
    insertBudget(amount){
        budgetTotal.innerHTML = amount;
        budgetLeft.innerHTML = amount;
    }


    printMessage(message, className){
        const div = document.createElement('div');
        div.classList.add('alert', 'text-center', className);
        div.appendChild(document.createTextNode(message));


        const primary = document.querySelector('.primary');
        primary.insertBefore(div, addExpenseForm);


        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 2000);

        addExpenseForm.reset()

    }


    // display expenses to the list
    insertExpense(name, amount) {
        const expenses = document.querySelector('#expenses ul');

        let li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';

        li.innerHTML = `
        ${name}

        <span class="badge badge-primary badge-pill">${amount}</span>
        `
        expenses.appendChild(li);


    }

}        




// variable
let userBudget;
let budget;
let budgetTotal = document.querySelector('span#total');
let budgetLeft = document.querySelector('span#left');


const addExpenseForm = document.querySelector('#add-expense');

const html = new HTML();







// eventlisteners
eventlisteners()
function eventlisteners() {
    // take a alert for user budget
    document.addEventListener('DOMContentLoaded', function() {
        userBudget = prompt('لطفا بودجه هفتگی خود را وارد کنید')

        // validate
        if (userBudget === null || userBudget === '' || userBudget === '0') {
            window.location.reload()
        } else {
            // instanciate Budget class
            budget = new Budget(userBudget)
            html.insertBudget(budget.budget)
        }

    })


    // get valuse form the form when submited
    addExpenseForm.addEventListener('submit', function(e) {
        e.preventDefault()

        // accsess to the value of input 
        const expense = document.querySelector('#expense').value
        const amount = document.querySelector('#amount').value

        if (expense === '' || amount === '') {
            html.printMessage('همه موارد الزامی است', 'alert-danger');
        } else {
            html.insertExpense(expense, amount)

        }


    })
}


























