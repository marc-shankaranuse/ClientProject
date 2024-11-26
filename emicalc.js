// Toggle EMI Calculator visibility
const emiToggle = document.getElementById('emi-toggle');
const emiCalculator = document.getElementById('emi-calculator');
const emiCloseBtn = document.getElementById('emi-close-btn');

emiToggle.addEventListener('click', () => {
    emiCalculator.classList.toggle('open');
});

emiCloseBtn.addEventListener('click', () => {
    emiCalculator.classList.remove('open');
});

// Synchronize input and slider for loan amount
const loanAmount = document.getElementById('loanAmount');
const loanAmountSlider = document.getElementById('loanAmountSlider');
loanAmount.addEventListener('input', () => loanAmountSlider.value = loanAmount.value);
loanAmountSlider.addEventListener('input', () => loanAmount.value = loanAmountSlider.value);

// Synchronize input and slider for interest rate
const interestRate = document.getElementById('interestRate');
const interestRateSlider = document.getElementById('interestRateSlider');
interestRate.addEventListener('input', () => interestRateSlider.value = interestRate.value);
interestRateSlider.addEventListener('input', () => interestRate.value = interestRateSlider.value);

// Synchronize input and slider for loan tenure
const loanTenure = document.getElementById('loanTenure');
const loanTenureSlider = document.getElementById('loanTenureSlider');
loanTenure.addEventListener('input', () => loanTenureSlider.value = loanTenure.value);
loanTenureSlider.addEventListener('input', () => loanTenure.value = loanTenureSlider.value);

// EMI Calculation
function calculateEMI() {
    const principal = parseFloat(loanAmount.value);
    const rate = parseFloat(interestRate.value) / 12 / 100;
    const tenure = parseFloat(loanTenure.value) * 12;

    if (principal && rate && tenure) {
        const emi = (principal * rate * Math.pow(1 + rate, tenure)) / (Math.pow(1 + rate, tenure) - 1);
        const totalPayment = emi * tenure;
        const totalInterest = totalPayment - principal;

        document.getElementById('monthlyEmi').innerText = `₹${emi.toFixed(2)}`;
        document.getElementById('totalPayment').innerText = `₹${totalPayment.toFixed(2)}`;
        document.getElementById('totalInterest').innerText = `₹${totalInterest.toFixed(2)}`;
    } else {
        alert('Please enter valid values.');
    }
}
