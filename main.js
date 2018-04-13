let FOUNTAINS = [];
let GRAVITY = new Vector(0, 1);
let BGCOLOR = '#D3E8EE';
let COLOR = 'rgb(255, 255, 255, 0.2)';
let WIDTH = 1024;
let HEIGHT = 768;
let DENSITY = 5;

function draw() {
    background(BGCOLOR);
    for (let f of FOUNTAINS) {
        f.update();
        f.show();
    }
}

function setup() {
    canvas(WIDTH, HEIGHT);
    ctx.fillStyle = COLOR;
    FOUNTAINS.push(new Fountain(WIDTH/2,   HEIGHT,  0, -37, DENSITY));
    FOUNTAINS.push(new Fountain(150,       HEIGHT,  8, -25, DENSITY));
    FOUNTAINS.push(new Fountain(WIDTH-150, HEIGHT, -8, -25, DENSITY));
    FOUNTAINS.push(new Fountain(300,       HEIGHT,  6, -30, DENSITY));
    FOUNTAINS.push(new Fountain(WIDTH-300, HEIGHT, -6, -30, DENSITY));
}

window.onload = function() {
    setup();
    setInterval(draw, 1000/40);
};
