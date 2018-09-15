const  binarySearch = (array, value) => {
    const arrayLength = array.length

    if (!arrayLength) {
        return -1
    }

    if (array[0] === value) {
        return 0
    }

    if (array[arrayLength - 1] === value) {
        return arrayLength - 1
    }

    let startIndex  = 0,
        stopIndex   = arrayLength - 1,
        middle      = Math.floor((stopIndex + startIndex)/2);

    if (array[middle] === value) {
        return middle
    }

    while(array[middle] !== value && startIndex < stopIndex){
        if (value < array[middle]){
            stopIndex = middle - 1;
        } else {
            startIndex = middle + 1;
        }
        middle = Math.floor((stopIndex + startIndex)/2);
    }
    return (array[middle] !== value) ? -1 : middle;
}


module.exports = binarySearch