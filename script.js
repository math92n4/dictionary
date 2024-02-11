
let wordArray = [];

async function fetchData() {
    const response = await fetch('../data/ddo_fullforms_2023-10-11.csv')
    const text = await response.text();
    populateArray(text);
}

function populateArray(text) {
    wordArray = text.split("\n").map(line => {
        const parts = line.split("\t");
        return {
          variant: parts[0],
          headword: parts[1],
          homograph: parts[2],
          partofspeech: parts[3],
          id: parts[4]
        }
    });

    //console.log(wordArray);
    binarySearchWithFunction("ansættelsesstop", wordArray, compare);
    findIndexTime(wordArray)
}
/*
const obj = {
    variant: "hestetyvs",
    headword: "hestetyv",
    homograph: '',
    partofspeech: "sb.",
    id: 53001170
}
*/

function compare(stringVariant, obj) {
    if (stringVariant < obj.variant) {
        return -1;
    } else if (stringVariant > obj.variant) {
        return 1;
    } else {
        return 0;
    }
}

function binarySearchWithFunction(value, array, compare) {
    const startTime = Date.now();
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
    const endTime = Date.now();
    const finalTime = endTime - startTime;
    console.log(finalTime)
}


function findIndexTime(wordArray) {
    const startTime = Date.now()
    const index = wordArray.findIndex(obj => obj.variant === 'ansættelsesstop');
    //console.log(index);
    const endTime = Date.now();
    const finalTime = endTime - startTime;
    console.log(finalTime);
}



fetchData()


