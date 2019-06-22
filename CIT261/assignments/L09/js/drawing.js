
let cx = document.querySelector("canvas").getContext("2d");
cx.clearRect(0, 0, 600, 200);
const drawTrapezoid = (cx, x, y, width, height, indent) => {
     cx.beginPath();
     cx.moveTo(x + indent, y);
     cx.lineTo(x - indent + width, y);
     cx.lineTo(x + width, y + height);
     cx.lineTo(x, y + height);
     cx.closePath();
     cx.stroke();
}
const drawDiamond = (cx, x, y, side, fill) => {
     cx.save();
     cx.fillStyle = fill;
     cx.translate(x + side / 2, y + side / 2);
     cx.rotate(Math.PI / 4);
     cx.translate(-x - side / 2, -y - side / 2);
     cx.fillRect(x, y, side, side);
     cx.restore();
}
const drawZigZag = (cx, x, y, width, height, num) => {
     cx.beginPath();
     cx.moveTo(x, y);
     let inc = height / num;
     for (let i = 0; i < num; i++) {
          let offset = y + (i * inc);
          cx.lineTo(x + width, offset + (inc / 2));
          cx.lineTo(x, offset + inc);
     }
     cx.stroke();
}
const drawSpiral = (cx, x, y, width, segments) => {
     cx.beginPath();
     cx.moveTo(x + width / 2, y + width / 2);
     let inc = Math.pow(Math.PI, 2) / segments;
     let angle = 0;
     for (let i = 0; i < segments; i++) {
          let points = [];
          angle += inc;
          points[0] = Math.cos(angle);
          points[1] = Math.sin(angle);
          angle += inc;
          points[2] = Math.cos(angle);
          points[3] = Math.sin(angle);
          points = points.map(x => ((x * i) + width) / 2);
          cx.lineTo(x + points[0], y + points[1]);
          cx.lineTo(x + points[2], y + points[3]);
     }
     cx.stroke();
}
const drawStar = (cx, x, y, width, points) => {
     let halfWidth = width / 2;
     let xCentre = x + halfWidth;
     let yCentre = y + halfWidth;
     let inc = 2 * Math.PI / points;
     let angle = 0;
     cx.beginPath();
     cx.moveTo(x + width, y + width / 2);
     for (let i = 0; i < points; i++) {
          angle += inc;
          cx.quadraticCurveTo(xCentre, yCentre, xCentre + Math.cos(angle) * halfWidth, yCentre + Math.sin(angle) * halfWidth);
     }
     cx.fillStyle = 'orange';
     cx.fill();
}
drawTrapezoid(cx, 0, 30, 80, 40, 20);
drawDiamond(cx, 100, 25, 50, 'red');
drawZigZag(cx, 180, 0, 100, 100, 6);
drawSpiral(cx, 300, 0, 100, 100);
drawStar(cx, 420, 0, 100, 8);