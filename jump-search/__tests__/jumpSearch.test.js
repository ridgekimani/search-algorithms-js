const jumpSearch = require("../jumpSearch")

const testArray = [1, 2, 3, 4, 5, 6]


describe ("jump search tests", () => {
    test('it returns a specific index on search', () => {
        expect(jumpSearch(testArray, 1)).toBe(0)
    })

    test('it returns -1 if the index is not found', () => {
        expect(jumpSearch(testArray, 7)).toBe(-1)
    })

})

