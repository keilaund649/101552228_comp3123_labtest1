function lowerCaseWords(arr) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(arr)) {
            reject(new Error('Input must be an array'));
        } else {
            const lowerCase= arr
            .filter((item) => typeof item === 'string')
            .map((word) => word.toLowerCase());
            resolve(lowerCase);
        }
    });
}
const mixed = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixed)
    .then((result) => {
        console.log(result); 
    })
    .catch((error) => {
        console.error(error.message);
    });