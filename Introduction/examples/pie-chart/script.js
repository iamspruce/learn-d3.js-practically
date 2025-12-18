const data = [10, 20, 30, 40];
const width = 300,
  height = 300,
  radius = Math.min(width, height) / 2;

const color = d3.scaleOrdinal(d3.schemeCategory10);

const svg = d3
  .select("#pie-chart-container")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .append("g")
  .attr("transform", `translate(${width / 2}, ${height / 2})`);

const pie = d3.pie();

const arc = d3.arc().innerRadius(0).outerRadius(radius);

const arcs = svg
  .selectAll("path")
  .data(pie(data))
  .enter()
  .append("path")
  .attr("d", arc)
  .attr("fill", (d, i) => color(i))
  .attr("stroke", "white")
  .style("stroke-width", "2px");
