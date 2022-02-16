const anagram = {


    /**
     * @param  {string} word - The word to calculate the quantity of anagrams
     * @return {(null|number)} - Return null if the word param is a numeric value or it's  empty. Otherwise, return the quantity of anagrams of the word
     */

    getAnagrams: function(word) {
        let counter = 0;
        let obj = {};

        if (!word || !isNaN(word)) return null;

        for (let i = 0; i < word.length; i++) {
            for (let j = i; j < word.length; j++) {
                let sortedWord = Array.from(word.substring(i, j + 1)).sort();
                let joinedWord = sortedWord.join('')


                obj[joinedWord] = (obj[joinedWord] || 0) + 1


                if (obj[joinedWord] > 1) counter += obj[joinedWord] - 1;
            }
        }

        return counter;
    }
}

export { anagram };