// class
class Budget {
    constructor(budget) {
        this.budget = budget;

    }
}







// variable
let userBudget;
let budget;








// eventlisteners
eventlisteners()
function eventlisteners() {
    // take a alert for user budget
    document.addEventListener('DOMContentLoaded', function() {
        userBudget = prompt('لطفا بودجه هفتگی خود را وارد کنید')
        console.log(userBudget)

        // validate
        if (userBudget === null || userBudget === '' || userBudget === '0') {
            window.location.reload()
        } else {
            // instanciate Budget class
            budget = new Budget(userBudget)
            console.log(budget)
        }

    })

}


























