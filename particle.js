class Particle {
    constructor(x, y, r) {
        this.pos = new Vector(x, y);
        this.r = r;
        this.acc = new Vector(0, 0);
        this.vel = new Vector(0, 0);
    }
    
    applyForce(force) {
        this.acc.add(force);
    }
    
    update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc = new Vector(0, 0);
    }
    
    show() {
        circle(this.pos, this.r);
    }
    
}
