const password = {
    minimumLength: 6,
    specialCharacters: '!@#$%^&*()-+',

    /**
     * @param  {string} passwordInput - The password to validate
     * @return {(object|boolean)} - Return an object if the string (password) length is below of minimum length. Otherwise, return a boolean: true if password matches the regex case, or false case doesn't matches.
     */

    validate: function(passwordInput) {
        if (passwordInput.length < this.minimumLength)
            return { remaining: this.minimumLength - passwordInput.length, error: true, minimumLength: this.minimumLength };

        const validatorExpression = `^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[${this.specialCharacters}]){${this.minimumLength},}.+$`
        const passwordRegexValidator = new RegExp(validatorExpression);

        let isSecurePassword = passwordRegexValidator.test(passwordInput);

        return isSecurePassword ? true : false;
    },
}

Object.freeze(password)

export { password };