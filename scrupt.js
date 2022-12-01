function sumTwoSmallestNumbers(numbers) {
    let twoSmallestNum = [];
    let sum = 0;
    numbers.sort((a, b) => a - b);
    twoSmallestNum = numbers.slice(0, 2);
    sum = twoSmallestNum.reduce((acc, number) => acc + number, 0);
    return sum;
}
