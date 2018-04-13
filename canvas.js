function circle(p, radius) {
    /* Draw a circle to the canvas.
     * p is a Vector describing the circle's position
     * radius is a number. */
    ctx.beginPath();
    ctx.arc(p.x, p.y, radius, 0, Math.PI*2);
    ctx.fill();
}


function background(color) {
    /* Paint over the canvas with 'color' (hex string or rgb string). 
     * The fillStyle of the context is returned to its previous state. */
    let prevFillStyle = ctx.fillStyle;
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, cnv.width, cnv.height);
    ctx.fill();
    ctx.fillStyle = prevFillStyle;
}


function canvas(width, height) {
    /* Uses the canvas element with id 'cnv'
     * to create a 2dContext. */
    window.cnv = document.getElementById('cnv');
    cnv.width = width;
    cnv.height = height;
    window.ctx = cnv.getContext('2d');
}
