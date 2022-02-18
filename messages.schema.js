export default {
    password: {
        insufficientLength: (result) => `Oops. Sua senha precisa ter no mínimo ${result.minimumLength} caracteres! Faltam ${result.remaining} caracteres.`,
        invalid: (input) => `Oops. Sua senha "${input}" não é forte o bastante. Certifique-se de que:\nContém no mínimo 1 digito.\nContém no mínimo 1 letra em minúsculo.\nContém no mínimo 1 letra em maiúsculo.\nContém no mínimo 1 caractere especial. Os caracteres especiais são: !@#$%^&*()-+\n`,
        valid: (input) => `Sua senha "${input}" pode ser caracterizada como uma senha válida e forte!`,
    },

    anagram: {
        quantity: (input, result) => `A quantidade de anagramas para "${input}" é: ${result}`
    }
}