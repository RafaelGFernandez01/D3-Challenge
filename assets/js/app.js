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

    const min_poverty = data.reduce((min, val) => (parseFloat(val.poverty) < min ? parseFloat(val.poverty) : min), Number.MAX_SAFE_INTEGER);
    const min_healthcare = data.reduce((min, val) => (parseFloat(val.healthcare) < min ? parseFloat(val.healthcare) : min), Number.MAX_SAFE_INTEGER);

    const max_poverty = data.reduce((max, val) => (parseFloat(val.poverty) > max ? parseFloat(val.poverty) : max), Number.MIN_SAFE_INTEGER);
    const max_healthcare = data.reduce((max, val) => (parseFloat(val.healthcare) > max ? parseFloat(val.healthcare) : max), Number.MIN_SAFE_INTEGER);

    const xLinearScale = d3.scaleLinear()
        .domain([min_poverty, max_poverty])
        .range([20, width]);

    const yLinearScale = d3.scaleLinear()
        .domain([min_healthcare, max_healthcare])
        .range([0, height]);

    console.log({
        min_poverty,
        min_healthcare,
        max_poverty,
        max_healthcare,
    })

    const svg = d3.select("#scatter")
        .append("svg")
        .attr("width", width + 20)
        .attr("height", height + 20)

    svg.selectAll("circle")
        .data(data).enter()
        .append("circle")
        .attr("cx", (d) => xLinearScale(parseFloat(d.poverty)))
        .attr("cy", (d) => yLinearScale(parseFloat(d.healthcare)))
        .attr("r", () => 12)
        .attr("fill", '#ff0000')
        .attr("opacity", ".75");


    svg.selectAll()
        .data(data)
        .enter()
        .append("text")
        .attr("x", d => xLinearScale(parseFloat(d.poverty)))
        .attr("y", d => yLinearScale(parseFloat(d.healthcare)))
        .style("font-size", "10px")
        .style("text-anchor", "middle")
        .style('fill', 'black')
        .text(d => (d.abbr));


    const bottomAxis = d3.axisBottom(xLinearScale).ticks(7);
    const leftAxis = d3.axisLeft(yLinearScale);

    svg.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(bottomAxis);

    svg.append("g")
        .call(leftAxis);

}

render()
    .then(() => {
        console.log('rendered...:');
    })
    .catch((error) => {
        console.error('APP ERROR:', error);
    });