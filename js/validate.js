document.addEventListener('DOMContentLoaded', function () {
    let passwordInput = document.getElementById('psw');
    let passwordStrength = document.getElementById('pwstrength');
    let pwwarning = document.getElementById('pwwarning');
    let emailwarning = document.getElementById('mailwarning');
    let emailInput = document.getElementById('usermail');
    let submitButton = document.getElementById('submitButton');

    submitButton.addEventListener('click', function () {
        let email = emailInput.value;
        var emailreg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

        if (emailreg.test(email)) {
            emailwarning.style.display = 'none';
          } else {
            emailwarning.style.display = 'inline-block';
          }
    });

    passwordInput.addEventListener('keyup', function () {
        let password = passwordInput.value;
        passwordStrength.style.display = 'block';

        let hasUpperCase = /[A-Z]/.test(password);
        let hasLowerCase = /[a-z]/.test(password);
        let hasNumber = /[0-9]/.test(password);
        let hasSpecialChar = /[!@#\$%\^\&*\)\(+=._-]/.test(password);

        let requirementsMet = 0;

        if (password.length >= 10) {
            requirementsMet++;
        }

        if (hasUpperCase) {
            requirementsMet++;
        }

        if (hasLowerCase) {
            requirementsMet++;
        }

        if (hasNumber) {
            requirementsMet++;
        }

        if (hasSpecialChar) {
            requirementsMet++;
        }

        pwwarning.innerHTML = `Anforderungen:
            <span class="${password.length >= 10 ? 'valid' : 'invalid'}">Mindestens 10 Zeichen</span>
            <span class="${hasUpperCase ? 'valid' : 'invalid'}">Mindestens 1 Großbuchstabe </span>
            <span class="${hasLowerCase ? 'valid' : 'invalid'}">Mindestens 1 Kleinbuchstabe </span>
            <span class="${hasNumber ? 'valid' : 'invalid'}">Mindestens 1 Zahl </span>
            <span class="${hasSpecialChar ? 'valid' : 'invalid'}">Mindestens 1 Sonderzeichen </span>`;

        passwordStrength.classList.remove('bad', 'moderate', 'good');

        if (requirementsMet === 5) {
            passwordStrength.classList.add('good');
            pwwarning.style.color = 'green';
            timeoutId = setTimeout(function () {
                passwordStrength.style.display = 'none';
                pwwarning.style.display = 'none';
            }, 1500);
        } else if (requirementsMet >= 3) {
            passwordStrength.classList.add('moderate');
        } else {
            passwordStrength.classList.add('bad');
        }

        if (password.length > 0) {
            pwwarning.style.display = 'inline-block';
        } else {
            pwwarning.style.display = 'none';
            passwordStrength.style.display = 'none';
        }
    });
});
