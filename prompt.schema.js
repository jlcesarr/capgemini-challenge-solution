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

export { configuration };