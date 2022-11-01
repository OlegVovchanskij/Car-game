// round rect

CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
    if (w < 2 * r) r = w / 2;
    if (h < 2 * r) r = h / 2;
    this.beginPath();
    this.moveTo(x+r, y);
    this.arcTo(x+w, y,   x+w, y+h, r);
    this.arcTo(x+w, y+h, x,   y+h, r);
    this.arcTo(x,   y+h, x,   y,   r);
    this.arcTo(x,   y,   x+w, y,   r);
    this.closePath();
    return this;
}


let cvs = document.getElementById("canvas");
let ctx = cvs.getContext('2d');



let logo = new Image();
logo.src = 'assets/img/logo.svg';


let bg = new Image('1280px','720px');
bg.src = 'assets/img/bg5.jpg'



let road = new Image();
road.src = 'assets/img/road2.svg';



let next = new Image();
next.src = 'assets/img/next.png';
next.classList.add('pointer');


let back = new Image();
back.src = 'assets/img/back.png';

let rotate = new Image();
rotate.src = 'assets/img/refresh.png';

let light = new Image();
light.src = 'assets/img/light.png';


let ColorPicker = new Image(64,64);
ColorPicker.src = 'assets/img/colorsPicker.png';








function drawGame() {
    ctx.drawImage(bg,0,0)
    ctx.drawImage(logo,565,0)
    ctx.drawImage(road,0,150)

    ctx.beginPath();
    ctx.roundRect(490, 300, 300, 200, 20).stroke();
    ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,.3)';
    ctx.borderRadius = '10px';

    ctx.drawImage(back,510,320);
    ctx.drawImage(rotate,608,320);
    ctx.drawImage(next,710,320);
    ctx.drawImage(light,560,405);
    ctx.drawImage(ColorPicker,640,405)

}

let game = setInterval(drawGame,1000);