const challengeFunction = require('./index.js')
const assert = require('assert')

describe('ChallengeTemplate', () => {

    /**
     * TEST DESCRIPTION
     */
    it('Test1: when cell1="A1" and cell2="C3" should return true', () => {

        let result = challengeFunction("A1", "C3")
        let expected = true

        assert.strictEqual(result,expected)
    })

    /**
     * TEST DESCRIPTION
     */
    it('Test2: when cell1="A1" and cell2="C4" should return false', () => {
        let result = challengeFunction("A1", "C4")
        let expected = false

        assert.strictEqual(result,expected)
    })

    /**
     * TEST DESCRIPTION
     */
    it('Test3: when cell1="B3" and cell2="B4" should return false', () => {
        let result = challengeFunction("B3", "B4")
        let expected = false

        assert.strictEqual(result,expected)
    })

    /**
     * TEST DESCRIPTION
     */
    it('Test4: when cell1="B3" and cell2="B5" should return true', () => {
        let result = challengeFunction("B3", "B5")
        let expected = true

        assert.strictEqual(result,expected)
    })

    /**
     * TEST DESCRIPTION
     */
    it('Test5: when cell1="F2" and cell2="F8" should return true', () => {
        let result = challengeFunction("F2", "F8")
        let expected = true

        assert.strictEqual(result,expected)
    })

    /**
     * TEST DESCRIPTION
     */
    it('Test6: when cell1="A8" and cell2="H1" should return true', () => {
        let result = challengeFunction("A8", "H1")
        let expected = true

        assert.strictEqual(result,expected)
    })

    /**
     * TEST DESCRIPTION
     */
    it('Test7: when cell1="E1" and cell2="D1" should return false', () => {
        let result = challengeFunction("E1", "D1")
        let expected = false

        assert.strictEqual(result,expected)
    })

})
