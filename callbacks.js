function resolvedPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("message : delayed success");
        }, 500);
    });
}
function rejectedPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("message : delayed error"));
        }, 500);
    });
}

