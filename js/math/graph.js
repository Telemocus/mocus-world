// G = ( V , E)

class Graph {
  constructor(points = [ ], segments = [ ]) {
    this.points = points;
    this.segments = segments;
  }

  addPoint(point){
      this.points.push(point);
  }
  draw(ctx) {
    for (const seg of this.segments) {
      seg.draw(ctx);
    }

    for (const point of this.points) {
      point.draw(ctx);
    }
  }
}
