// @TODO: YOUR CODE HERE!
console.log('hello!');

function read_csv_file() {
    return new Promise((resolve, reject) => {
        d3.csv("https://raw.githubusercontent.com/RafaelGFernandez01/D3-Challenge/master/assets/data/data.csv", (data) => {
            console.log(data);
            resolve(data);
        });
    });
}