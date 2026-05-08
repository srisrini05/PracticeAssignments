function intersection(arr1, arr2) {
    const intersect = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                intersect.push(arr1[i]);
                break;
            }
        }
    }
    return intersect;
}
//const arr1 = [1, 2, 2, 1, 4];
//const arr1 = [6, 9, 5];
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 2, 4];
//const arr2 = []; 
console.log(intersection(arr1, arr2)); 
