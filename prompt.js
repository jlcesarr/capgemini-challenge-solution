import { ladder } from './modules/ladder.js'
import { password } from './modules/password.js'
import { anagram } from './modules/anagram.js'

import prompt from 'prompt';
import { configuration as promptConfig } from './prompt.schema.js'
import messages from './messages.schema.js'

prompt.start()

const handleLadderOptionChoice = () => {
    prompt.get(promptConfig.ladder, function(err, inputResponse) {
        console.log(ladder.buildLadder(inputResponse.Ladder))
    })
}

const handlePasswordOptionChoice = () => {
    prompt.get(promptConfig.password, function(err, inputResponse) {

        const inputPassword = inputResponse.Password
        const passwordResult = password.validate(inputPassword);

        if (passwordResult.error) {
            console.log(messages.password.insufficientLength(passwordResult))
            return;
        }

        if (passwordResult === true) {
            console.log(messages.password.valid(inputPassword))
        } else {
            console.log(messages.password.invalid(inputPassword))
        }
    })
}


const handleAnagramOptionChoice = () => {
    prompt.get(promptConfig.anagram, function(err, inputResponse) {
        const anagramInput = inputResponse.Word
        const anagramResult = anagram.getAnagrams(anagramInput)
        return console.log(messages.anagram.quantity(anagramInput, anagramResult))
    })
}

prompt.get(promptConfig.mainOptions, function(err, inputResponse) {
    console.clear()
    if (inputResponse.option == 1)
        handleLadderOptionChoice()
    else if (inputResponse.option == 2)
        handlePasswordOptionChoice()
    else if (inputResponse.option == 3)
        handleAnagramOptionChoice()
})