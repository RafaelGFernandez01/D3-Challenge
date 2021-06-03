// @TODO: YOUR CODE HERE!
var _data = null;

async function read_csv_file() {
    if (_data) return _data;

    _data = await d3.csv("https://raw.githubusercontent.com/RafaelGFernandez01/D3-Challenge/master/assets/data/data.csv");

    return _data;
}

async function render() {
    const data = await read_csv_file();

    console.log('data', data);
}