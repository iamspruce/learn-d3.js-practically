const width = 800;
const height = 400;

const svg = d3
  .select("#world-map-container")
  .append("svg")
  .attr("viewBox", `0 0 ${width} ${height}`)
  .style("width", "100%")
  .style("height", "auto");

const projection = d3
  .geoNaturalEarth1()
  .scale(width / 1.5 / Math.PI)
  .translate([width / 2, height / 2]);

const path = d3.geoPath().projection(projection);

// Using a reliable GeoJSON source for countries
d3.json(
  "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson"
)
  .then((data) => {
    svg
      .append("g")
      .selectAll("path")
      .data(data.features)
      .enter()
      .append("path")
      .attr("fill", "#69b3a2")
      .attr("d", path)
      .style("stroke", "#fff")
      .style("stroke-width", 0.5)
      .on("mouseover", function () {
        d3.select(this).attr("fill", "#408070");
      })
      .on("mouseout", function () {
        d3.select(this).attr("fill", "#69b3a2");
      });
  })
  .catch((error) => {
    console.error("Error loading map:", error);
  });
