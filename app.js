function calculateAge() {
    var birthdate = document.getElementById("birthdate").value;
    var result = document.getElementById("result");

    if (birthdate === "") {
        result.innerHTML = "Please enter your birthdate.";
        return;
    }

    var birthDate = new Date(birthdate);
    var today = new Date();

    var years = today.getFullYear() - birthDate.getFullYear();
    var months = today.getMonth() - birthDate.getMonth();
    var days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        var previousMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        days += previousMonth;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    result.innerHTML = "You are " + years + " years, " + months + " months, and " + days + " days old.";
}