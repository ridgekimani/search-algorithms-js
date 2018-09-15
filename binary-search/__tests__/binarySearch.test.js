const binarySearch = require("../binarySearch")

const testArray = [1, 2, 3, 4, 5, 6]


describe ("binary search tests", () => {
    test('it returns a specific index on search', () => {
        expect(binarySearch(testArray, 1)).toBe(0)
    })

    test('it returns -1 if the index is not found', () => {
        expect(binarySearch(testArray, 7)).toBe(-1)
    })

})

