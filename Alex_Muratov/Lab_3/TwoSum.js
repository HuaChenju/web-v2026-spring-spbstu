function TwoSum(arr,sum) {
    const dictionary  = new Set();
    const pairs = new Map();

    for (let number of arr){
        const expected = sum - number;

        if (dictionary.has(expected)){
            if(!pairs.has(number) && (!pairs.has(expected))) {
                pairs.set(expected, number);
            }
        }
        dictionary.add(number);
    }
    return pairs;
}

arr = [1,9,1];
sum = 10;
console.log(TwoSum(arr,sum));