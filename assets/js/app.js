// @TODO: YOUR CODE HERE!
console.log('hello!');

function read_csv_file() {
    return new Promise((resolve, reject) => {
        d3.csv("assets/data/data.csv", (data) => {
            console.log(data);
            resolve(data);
        });
    });
}