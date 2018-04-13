class Fountain {
    constructor(x, y, jetX, jetY, density) {
        this.origin = new Vector(x, y);
        this.jet = new Vector(jetX, jetY);
        this.particles = [];
        this.density = density;  
    }

    spawn(n) {
        for (let i = 0; i < n; i++) {
            let n = new Particle(this.origin.x, this.origin.y, 5);
            n.applyForce(this.jet);
            let x = (Math.random()-0.5)/0.5;
            let y = (Math.random()-0.5)*4;
            n.applyForce(new Vector(x, y));
            this.particles.push(n);
        }
    }

    update() {
        this.spawn(this.density);
        for (let i = this.particles.length-1; i >=0; i--) {
            this.particles[i].applyForce(GRAVITY);
            this.particles[i].update();
            if (this.particles[i].pos.y > cnv.height) {
                this.particles.splice(i, 1);
            }
        }
    }
    
    show() {
        for (let p of this.particles) {
            p.show();
        }
    }
    
}
