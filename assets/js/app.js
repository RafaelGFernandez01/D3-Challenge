// @TODO: YOUR CODE HERE!
var _data = null;

async function read_csv_file() {
    if (_data) return _data;

    _data = await d3.csv("https://raw.githubusercontent.com/RafaelGFernandez01/D3-Challenge/master/assets/data/data.csv");

    return _data;
}

async function render() {
    const data = await read_csv_file();
    const width = 500;
    const height = 500;

    const svg = d3.select("#scatter")
        .append("svg")
        .attr("width", width)
        .attr("height", height)

    svg.selectAll("circle")
        .data(data).enter()
        .append("circle")
        .attr("cx", (d) => d.poverty * (width / 100))
        .attr("cy", (d) => d.healthcare * (height / 100))
        .attr("r", () => (width / 100))
        .attr("fill", '#aaaaaa');
}

render()
    .then(() => {
        console.log('rendered...:');
    })
    .catch((error) => {
        console.error('APP ERROR:', error);
    });