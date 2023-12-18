myCanvas.width = 600;
myCanvas.height = 600;
const ctx = myCanvas.getContext("2d");

const p1 = new Point(200, 200);
const p2 = new Point(500, 500);
const p3 = new Point(350, 350);
const p4 = new Point(100, 300);

const s1 = new Segment(p1, p2);
const s2 = new Segment(p1, p3);
const s3 = new Segment(p1, p4);
const s4 = new Segment(p2, p3);

const graph = new Graph([p1, p2, p3, p4], [s1, s2, s3, s4]);

function addRandomPoint() {
  const success =  graph.tryAddPoint(
    new Point(Math.random( ) * myCanvas.width, Math.random() * myCanvas.height) //adds random points
  );

  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height); //Clears the canvas back to 0 0. Both the width and height
  graph.draw(ctx); // We tell the graph to start drawing itself again.

console.log(success);
};

  graph.draw(ctx);