const ladder = {
    fillChar: "*",

    /**
     * @param  {number} ladderLength - The quantity of stairs of the ladder
     * @return {(null|string)} - Return null if ladderLength param is not numeric. Otherwise, return a string, a mounted ladder.
     */

    buildLadder: function(ladderLength) {
        if (isNaN(ladderLength)) return null;

        let buildingLadder = [];

        for (let charQuantity = 1; charQuantity <= ladderLength; charQuantity++) {
            buildingLadder.push(
                this.fillChar
                .repeat(charQuantity) // repeat fillChar
                .padStart(ladderLength, " ") // append whitespace to the start of the string, respecting the value of the maximum length of the string/ladder block
            )
        }

        const buildedLadder = buildingLadder.join('\n');
        return buildedLadder;
    }
}



export { ladder };