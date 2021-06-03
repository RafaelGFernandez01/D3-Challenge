// @TODO: YOUR CODE HERE!
var _data = null;

async function read_csv_file() {
    if (_data) return _data;

    _data = await d3.csv("https://raw.githubusercontent.com/RafaelGFernandez01/D3-Challenge/master/assets/data/data.csv");

    return _data;
}

async function render() {
    const data = await read_csv_file();

    const svg = d3.select("#scatter")
        .append("svg")
        .attr("width", 250)
        .attr("height", 250)

    svg.selectAll("circle")
        .data(data).enter()
        .append("circle")
        .attr("cx", (d) => d.poverty)
        .attr("cy", (d) => d.healthcare)
        .attr("r", () => 1)
        .attr("fill", '#aaaaaa');
}

render()
    .then(() => {
        console.log('rendered...:');
    })
    .catch((error) => {
        console.error('APP ERROR:', error);
    });