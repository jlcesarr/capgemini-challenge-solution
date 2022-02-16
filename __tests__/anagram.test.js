import { anagram } from '../modules/anagram.js'


describe("Anagrams", () => {
    it("Should return null if the word is empty or is a numeric value", () => {
        const numericAnagramInput = 10;
        const emptyAnagramInput = "";

        const [firstResult, secondResult] = [anagram.getAnagrams(numericAnagramInput),
            anagram.getAnagrams(emptyAnagramInput)
        ]


        expect(firstResult).toBeNull();
        expect(secondResult).toBeNull();
    })


    it("Should return the correct quantity of anagram of the words", () => {
        const anagramInput = {
            word: "ovo",
            anagramQuantity: 2
        };
        const secondAnagramInput = {
            word: "ifailuhkqq",
            anagramQuantity: 3
        };

        const [firstResult, secondResult] = [anagram.getAnagrams(anagramInput.word),
            anagram.getAnagrams(secondAnagramInput.word)
        ]


        expect(firstResult).toBe(anagramInput.anagramQuantity);
        expect(secondResult).toBe(secondAnagramInput.anagramQuantity);
    })
})