class Segment {
  constructor(p1, p2) {
    this.p1 = p1;
    this.p2 = p2;
  }

  draw(ctx, width = 2, color = "black") {
    //ctx = context on this project
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.moveTo(this.p1.x, this.p1.y);
    ctx.moveTo(this.p2.x, this.p2.y);
    ctx.stroke();
  }
}
