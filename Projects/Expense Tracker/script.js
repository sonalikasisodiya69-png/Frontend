let budget = 0;
let expenses = [];

function addBudget() {

    budget = Number(
document.getElementById("budget-Input").value);
updateSummary();
    }

    function addExpense() {
        let category = document.getElementById("Category").value;
        let amount = Number(document.getElementById("expense-Amount").value);

        if(category=="" || amount <= 0){
            alert("Please enter valid category and amount.");
            return;
        }
        expenses.push({ category, amount });
        document.getElementById("Category").value = "";
        document.getElementById("expense-Amount").value = "";

        displayExpenses();
        updateSummary();
    }
    
    function displayExpenses() {
        let tableBody = document.getElementById("expenseTable");
        tableBody.innerHTML = "";
        expenses.forEach((expense, index) => {
            tableBody.innerHTML += `
                <tr>
                <td>${expense.category}</td>
                <td>${expense.amount.toFixed(2)}
                </td>
                <td>
                <button class="remove-btn" onclick="removeExpense(${index})">Remove</button></td>
                </tr>
            `;
        });
    }

    function removeExpense(index) {
        expenses.splice(index, 1);
        displayExpenses();
        updateSummary();
    }
      function updateSummary() {
        let totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
        document.getElementById("total-budget").innerText = budget.toFixed(2);
        document.getElementById("total-expenses").innerText = totalExpenses.toFixed(2);
        document.getElementById("budget-left").innerText = (budget - totalExpenses).toFixed(2);
    }

    function resetAll() {
        budget = 0;
        expenses = [];
        document.getElementById("budget-Input").value = "";
        document.getElementById("Category").value = "";
        document.getElementById("expense-Amount").value = "";
        displayExpenses();
        updateSummary();
    }
     
          