const configuration = {
    mainOptions: {
        name: 'option',
        validator: /^[1-3]*$/,
        description: '\nEscolha uma opção:\n1-Construtor de escadas\n2-Validar senhas\n3-Calcular anagramas',
        warning: 'Selecione uma opção de 1 a 3',
        required: true
    },
    anagram: {
        name: 'Word',
        validator: /^[a-zA-Z\s-]+$/,
        description: 'Informe uma palavra',
        type: 'string',
        warning: 'A palavra deve conter apenas letras',
        required: true
    },
    ladder: {
        name: 'Ladder',
        description: 'Informe a quantidade de degraus',
        validator: /^[1-9][0-9]*$/,
        warning: 'A quantidade de degraus deve ser um número inteiro e acima de 0',
        required: true
    },
    password: {
        name: 'Password',
        description: 'Informe uma senha',
        warning: 'Informe uma senha válida',
        required: true
    },
}


const messages = {
    password: {
        insufficientLength: (result) => `Oops. Sua senha precisa ter no mínimo ${result.minimumLength} caracteres! Faltam ${result.remaining} caracteres.`,
        invalid: (input) => `Oops. Sua senha "${input}" não é forte o bastante. Certifique-se de que:\nContém no mínimo 1 digito.\nContém no mínimo 1 letra em minúsculo.\nContém no mínimo 1 letra em maiúsculo.\nContém no mínimo 1 caractere especial. Os caracteres especiais são: !@#$%^&*()-+\n`,
        valid: (input) => `Sua senha "${input}" pode ser caracterizada como uma senha válida e forte!`,
    },

    anagram: {
        quantity: (input, result) => `A quantidade de anagramas para "${input}" é: ${result}`
    }
}



export { configuration, messages };