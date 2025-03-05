
function workChecker(){
    let work;
    let pay;
    work = prompt("How long have you been there?");
    pay = prompt("How much do they pay?");
    workHeader.innerHTML = `Oh ${work}, Do you like it there?.`;
    workParagraph.innerHTML = `${pay}, thats not bad when you enjoy your job.`;

 workButton.onclick = workChecker;
}

function calculateWeekly() {
    let hours;
    let payRate;
    let weekly;
    hours = prompt("How many hours do you work?");
    payRate = prompt("What is your hourly rate?");
    
    
    let hoursWorked = Number(hours);
    let payPerHour = Number(payRate);
    weekly = hoursWorked * payPerHour;
    
    monthlyParagraph.innerHTML = `${weekly} is your total monthly income.`;

     }
  
  calculateButton.onclick = calculateWeekly;