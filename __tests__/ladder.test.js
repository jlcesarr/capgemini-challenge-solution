import { ladder } from '../modules/ladder';

describe('Ladder', () => {
    it('Should return null for not numeric parameter', () => {
        let ladderInput = "invalid";
        const result = ladder.buildLadder(ladderInput);
        expect(result).toBeNull()
    })

    it('Should return a mounted ladder, the length of blocks must be equal to the total steps of the ladder', () => {
        let ladderInput = 10;
        const result = ladder.buildLadder(ladderInput);

        const ladderBlocks = result.split('\n');

        expect(ladderBlocks.length).toBe(ladderInput) // the total number of elements (blocks) must be equal to the total number of steps on the ladder

        let isValidLadderBlocks = true;
        let counter = ladderInput;

        ladderBlocks.forEach((ladderBlock) => {
            counter--;

            if (!ladderBlock.startsWith(" ".repeat(counter))) isValidLadderBlocks = false; // ensures that elements (blocks) starts with whitespace, except the last element
        })


        expect(isValidLadderBlocks).toBe(true)
    })
})