const svg = d3
  .select("#viz")
  .append("svg")
  .attr("width", 300)
  .attr("height", 300);

const circle = svg
  .append("circle")
  .attr("cx", 150)
  .attr("cy", 150)
  .attr("r", 50)
  .attr("fill", "#c2298a") // Using our theme's pink
  .style("cursor", "pointer");

// Simple interactive element
circle
  .on("mouseover", function () {
    d3.select(this).transition().duration(200).attr("r", 70);
  })
  .on("mouseout", function () {
    d3.select(this).transition().duration(200).attr("r", 50);
  });

// === CONTROLS ===
window.addEventListener("playgroundControlChange", (e) => {
  const { controlId, value } = e.detail;
  if (controlId === "size-slider") {
    circle.transition().duration(500).attr("r", value);
  }
  if (controlId === "color-select") {
    circle.transition().duration(500).attr("fill", value);
  }
});
