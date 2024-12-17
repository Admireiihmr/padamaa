let generatedOtp = null;

// Send OTP
document.getElementById('send-otp').addEventListener('click', function () {
    generatedOtp = Math.floor(100000 + Math.random() * 900000);
    alert("OTP Sent: " + generatedOtp); // Simulate OTP sending
    document.getElementById('otp-section').style.display = 'block';
    this.disabled = true;
});

// Verify OTP
document.getElementById('verify-otp').addEventListener('click', function () {
    const enteredOtp = document.getElementById('otp').value;
    if (enteredOtp === String(generatedOtp)) {
        alert("OTP Verified Successfully!");
        document.getElementById('register-container').style.display = 'none';
        document.getElementById('profile-container').style.display = 'block';
    } else {
        alert("Invalid OTP. Try again.");
    }
});

// Submit Profile
document.getElementById('submit-profile').addEventListener('click', function () {
    document.getElementById('profile-container').style.display = 'none';
    document.getElementById('medical-container').style.display = 'block';
});

// Show/Hide Diabetes Follow-up Questions
document.querySelectorAll('input[name="diabetes"]').forEach(input => {
    input.addEventListener('change', () => {
        document.getElementById('diabetes-years').classList.toggle('hidden', input.value !== 'yes');
        document.getElementById('foot-ulcers').classList.toggle('hidden', input.value !== 'no');
    });
});

// Medical Form Submission
document.getElementById('medical-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert("Medical Information Submitted Successfully!");
    window.location.href = 'image.html';
});
const grade3Percentage = highestGradePercentage;

// Update the DOM with percentages
document.getElementById('grade-1-percentage').textContent = `${grade1Percentage}%`;
document.getElementById('grade-2-percentage').textContent = `${grade2Percentage}%`;
document.getElementById('grade-3-percentage').textContent = `${grade3Percentage}%`;
document.getElementById('healthy-percentage').textContent = `${healthyPercentage}%`;

// Determine the final prediction based on the highest percentage
let finalPrediction = "Grade 3";
if (grade3Percentage > grade1Percentage && grade3Percentage > grade2Percentage && grade3Percentage > healthyPercentage) {
    finalPrediction = "Grade 3";
} else if (grade1Percentage > grade2Percentage && grade1Percentage > healthyPercentage) {
    finalPrediction = "Grade 1";
} else if (grade2Percentage > healthyPercentage) {
    finalPrediction = "Grade 2";
} else {
    finalPrediction = "Healthy";
}

document.getElementById('final-prediction').textContent = `Final Prediction: ${finalPrediction}`;
document.getElementById('prediction-result').style.display = 'block';