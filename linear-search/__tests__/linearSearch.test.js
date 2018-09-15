const linearSearch = require("../linearSearch")

const testArray = [1, 2, 3, 4, 5, 6]


describe ("linear search tests", () => {
    test('it returns a specific index on search', () => {
        expect(linearSearch(testArray, 1)).toBe(0)
    })

    test('it returns -1 if the index is not found', () => {
        expect(linearSearch(testArray, 7)).toBe(-1)
    })

})
