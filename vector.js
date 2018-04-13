/* A very minimalist implementation of a 2d vector. */

class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    
    add(v) {
        /* Add the Vector v to this Vector,
         * and return this Vector. */
        this.x += v.x;
        this.y += v.y;
        return this;
    }
    
    copy() {
        /* Create and return a new Vector
         * with identitcal properties to this Vector. */
        return new Vector(this.x, this.y);
    }
}
