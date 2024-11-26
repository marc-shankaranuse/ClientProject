function calculateEMI() {
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const loanTenure = parseInt(document.getElementById('loanTenure').value) * 12; // Convert years to months

    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTenure)) {
        alert("Please enter valid inputs.");
        return;
    }

    const monthlyInterestRate = (interestRate / 100) / 12;  // Monthly interest rate
    const emi = loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTenure) / 
                (Math.pow(1 + monthlyInterestRate, loanTenure) - 1);

    const totalPayment = emi * loanTenure;
    const totalInterest = totalPayment - loanAmount;

    document.getElementById('result').innerHTML = `
        <p>EMI: ₹${emi.toFixed(2)}</p>
        <p>Total Interest Payable: ₹${totalInterest.toFixed(2)}</p>
        <p>Total Payment (Principal + Interest): ₹${totalPayment.toFixed(2)}</p>
    `;
}
