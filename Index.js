
function workChecker(){
    let work;
    let pay;
    work = prompt("How long have you been there?");
    pay = prompt("How much do they pay?");
    workHeader.innerHTML = `Oh ${work}, Do you like it there?.`;
    workParagraph.innerHTML = `${pay}, thats not bad when you enjoy your job.`;
}
workButton.onclick = workChecker;