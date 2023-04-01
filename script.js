const form = document.getElementById("registration-form");
const nameInput = document.getElementById("name");
const dobInput = document.getElementById("dob");
const genderInput = document.getElementById("gender");
const yearInput = document.getElementById("year");
const emailInput = document.getElementById("email");
const courseInput = document.getElementById("course");
const mobileInput = document.getElementById("mobile");


form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Retrieve the values from the input fields
    const name = nameInput.value;
    const dob = dobInput.value;
    const gender = genderInput.value;
    const year = yearInput.value;
    const email = emailInput.value;
    const course = courseInput.value;
    const mobile = mobileInput.value;

    // Validate the input fields
    if (name === "") {
        alert("Please enter your name");
        return;
    }

    if (dob === "") {
        alert("Please enter your date of birth");
        return;
    }

    let isGenderSelected = false;
    for (let i = 0; i < genderInputs.length; i++) {
        if (genderInputs[i].checked) {
            isGenderSelected = true;
            break;
        }
    }

    if (!isGenderSelected) {
        alert("Please select your gender");
        return;
    }

    if (year === "") {
        alert("Please select your year of study");
        return;
    }

    if (email === "") {
        alert("Please enter your email address");
        return;
    }

    if (course === "") {
        alert("Please select your course");
        return;
    }

    if (mobile === "") {
        alert("Please enter your mobile number");
        return;
    }

    // If all the input fields are valid, submit the form
    alert("Thank you for registering!");
    form.submit();
});
