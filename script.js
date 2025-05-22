function bmicalculator(weight, height) {
    var userWeight = prompt("Enter your weight in KG");
    var userHeight = prompt("Enter your height in Meter");

    var bmi = Math.round(userWeight / (userHeight * userHeight));

    if (bmi < 18.5) {
        alert("Your BMI is " + bmi + ", so you are underweight.");
    }

    if (bmi >= 18.5 && bmi <= 24.9) {
        alert("Your BMI is " + bmi + ", so you have a normal weight.");
    }
    
    if (bmi > 24.9) {
        alert("Your BMI is " + bmi + ", so you are overweight.");
    }
}

bmicalculator();

