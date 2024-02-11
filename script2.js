const array = [1,2,3,5,6,7,8,9,11,12,14,15]

function binarySearch(value, array) {

    let start = 0;
    let end = array.length - 1;

    while (start <= end) {

        console.log(`${start} ${end}`)

        let middle = Math.floor((start + end) / 2);

        if (value === array[middle]) {
            console.log(`Value ${value} was found at index ${middle}`);
            break;

        } else if(value > array[middle]) {
            start = middle + 1
            console.log(`Value ${value} is higher than value at index ${middle}`);

        } else if (value < array[middle]) {
            end = middle - 1
            console.log(`Value ${value} is lower than value at index ${middle}`);
        } 
    }
}

//binarySearch(-1, array)

function compare(val1, val2) {
    if (val1 > val2) {
        return 1;
    } else if(val1 < val2) {
        return -1
    } else {
        return 0
    }
}

function binarySearchWithFunction(value, array, compare) {

    let start = 0;
    let end = array.length - 1;

    while (start <= end) {

        let middle = Math.floor((start + end) / 2);
        let comparison = compare(value, array[middle])

        if (comparison === 0) {
            console.log(`Value ${value} was found at index ${middle}`);
            break;

        } else if(comparison === 1) {
            start = middle + 1
            console.log(`Value ${value} is higher than value at index ${middle}`);

        } else {
            end = middle - 1
            console.log(`Value ${value} is lower than value at index ${middle}`);
        } 
    }
}

binarySearchWithFunction(3, array, compare)