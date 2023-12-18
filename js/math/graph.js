// G = ( V , E)

class Graph {
  constructor(points = [ ], segments = [ ]) {
    this.points = points;
    this.segments = segments;
  }

  addPoint(point){
      this.points.push(point); //push point into an array.
  }

  containsPoint(point){
    return this.points.find((p) => p.equals(point));  //find will loop through all the points to find if p = to point
  }

  tryAddPoint(point){
    if (!this.containsPoint(point)){
      this.addPoint(point);

      return true;
    }
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
