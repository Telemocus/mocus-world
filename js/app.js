myCanvas.width = 600;
myCanvas.height = 600;
const ctx = myCanvas.getContext("2d");

const p1 = new Point(200, 200);
const p2 = new Point(500, 500);
const p3 = new Point(350, 350);
const p4 = new Point(100, 300);


const graph = new Graph([p1, p2, p3, p4]);
graph.draw(ctx);

