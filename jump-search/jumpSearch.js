const jumpSearch = (array, value) => {
    const arrayLength = array.length
    const stepSize = Math.floor(Math.sqrt(arrayLength))
    let startIndex = 0
    let stopIndex = stepSize

    while (value > array[Math.min(stopIndex, arrayLength)]) {
        // Make a jump to the next step size
        startIndex = stopIndex
        stopIndex += stepSize

        if (startIndex > arrayLength) {
            return -1
        }
    }

    // Do a linear search for the remaining block from the start index
    let currentIndex =  startIndex

    while(currentIndex < Math.min(stopIndex, arrayLength)) {
        if (array[currentIndex] === value) {
            return currentIndex;
        }
        currentIndex += 1;
    }
    return -1
}

module.exports = jumpSearch