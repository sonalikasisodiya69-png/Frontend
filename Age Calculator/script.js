function getDoB() {
    const inputDoB = document.getElementById('inputDoB').value;
    const currentDateInput = document.getElementById('currentDate').value;

if ( !inputDoB || !currentDateInput) {
    alert ('Please enter both Date of Birth and Current Date');
    return;
}
    const DoB = new Date (inputDoB);
    const currentDate = new Date (currentDateInput);

    let age = currentDate.getFullYear() - DoB.getFullYear();
    const monthDifference = currentDate.getMonth() - DoB.getMonth();
      if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDoB() < DoB.getDate())) {
        age--;
      }
      document.getElementById('currentAge').textContent = `Your Age is ${age} years.`;
    }
