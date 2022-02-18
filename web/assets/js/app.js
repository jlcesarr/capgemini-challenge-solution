'use strict'

import { ladder } from '../../../modules/ladder.js'
import { password } from '../../../modules/password.js'
import { anagram } from '../../../modules/anagram.js'
import messages from '../../../messages.schema.js'


const closeActiveSection = () => {
    const activeSection = document.querySelector('.is-active');
    activeSection.classList.remove('is-active')
}

// SECTIONS
const sections = {
    ladder: document.querySelector('.ladder'),
    password: document.querySelector('.password'),
    anagram: document.querySelector('.anagram'),
}

// MENU
const menu = document.querySelector('.options')

menu.addEventListener('click', (event) => {
    const { target } = event;

    if (target.classList.contains('options-link')) {
        const section = target.getAttribute('href').replace("#", "")
        closeActiveSection()
        sections[section].classList.add('is-active')
    }
})


const sectionsElements = {
    ladder: {
        input: sections.ladder.querySelector('.input-control'),
        button: sections.ladder.querySelector('.btn-action'),
        output: sections.ladder.querySelector('.output-box .output-text')
    },
    password: {
        input: sections.password.querySelector('.input-control'),
        button: sections.password.querySelector('.btn-action'),
        output: sections.password.querySelector('.output-box .output-text')
    },
    anagram: {
        input: sections.anagram.querySelector('.input-control'),
        button: sections.anagram.querySelector('.btn-action'),
        output: sections.anagram.querySelector('.output-box .output-text')
    },
}

const appendResultToOutput = (result, section) => {
    section.output.innerHTML = ""; // RESET OUTPUT VALUE

    let resultElement = document.createElement('p');
    let resultTextElement = document.createTextNode(result)


    resultElement.appendChild(resultTextElement)
    section.output.appendChild(resultElement)
}

const handleButtonClick = (event) => {
    const { currentTarget: element } = event;

    const featureAttr = element.dataset.function
    const referredSection = sectionsElements[featureAttr];

    if (referredSection.input.value == "") return;

    if (featureAttr == 'ladder') {
        let result = ladder.buildLadder(referredSection.input.value)

        console.log(result.split('\n').join('<br>'))

        if (result === null) return;

        appendResultToOutput(result, referredSection);

    } else if (featureAttr == 'password') {
        let result = password.validate(referredSection.input.value)

        if (result === true) {
            appendResultToOutput(messages.password.valid(referredSection.input.value), referredSection);
        } else if (result === false) {
            appendResultToOutput(messages.password.invalid(referredSection.input.value), referredSection);
        } else if (typeof result == 'object') {
            appendResultToOutput(messages.password.insufficientLength(result), referredSection);
        }

    } else if (featureAttr == 'anagram') {
        let result = anagram.getAnagrams(referredSection.input.value)

        if (result === null) return;

        appendResultToOutput(messages.anagram.quantity(referredSection.input.value, result), referredSection);
    }
}

for (let section in sectionsElements) {
    sectionsElements[section].button.addEventListener('click', handleButtonClick)
}