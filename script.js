const exampleArray = [1, 2, 3, 4, 10, 20];
const startingNumber = 5;

const getArraySum = (numbersArray, initialValue) => {

    let sum = initialValue;

    if (numbersArray.length == 0) {
        console.log(sum)
        return sum;
    }
        
    let del = numbersArray.shift();
    sum += del;
    return getArraySum(exampleArray, sum)
};

getArraySum(exampleArray, startingNumber)