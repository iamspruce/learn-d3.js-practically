// Select the square element
const square = d3.select("#my-square");

// Listen for control changes from the playground
window.addEventListener("playgroundControlChange", (e) => {
  const { controlId, value } = e.detail;

  if (controlId === "size") {
    // Center the square as it changes size
    const newSize = parseFloat(value);
    const newPos = 250 - newSize / 2;

    square
      .transition()
      .duration(200)
      .attr("width", newSize)
      .attr("height", newSize)
      .attr("x", newPos)
      .attr("y", newPos);
  }

  if (controlId === "color") {
    square.transition().duration(300).attr("fill", value);
  }
});
