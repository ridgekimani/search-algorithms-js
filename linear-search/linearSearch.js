const linearSearch = (array, value) => {
    let result = -1
    array.forEach((val, key) => {
        if (value === val) {
            result = key
        }
    })
    return result
}

module.exports = linearSearch
