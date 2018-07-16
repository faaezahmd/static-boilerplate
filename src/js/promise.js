export default class Game {
  constructor(canvas) {  
    const { innerWidth, innerHeight } = window;
    this.context = canvas.getContext('2d');  
    canvas.width = innerWidth;
    canvas.height = 500;
    this.createCircle = this.createCircle.bind(this);
  }

  createCircle(x, y) {
    const {context} = this;
    context.beginPath();
    context.arc(x, y, 30, 0, Math.PI * 2, false);
    context.strokeStyle = 'blue';
    context.stroke();
  }

  animate() {
    const { innerWidth, innerHeight } = window;
    const {context} = this;
    const x = Math.random() * innerWidth, y = Math.random() * 500;
    this.createCircle(x, y);
    // requestAnimationFrame(animate);
    context.clearRect(0, 0, innerWidth, innerHeight);
  }

}