

class Player{
    x = 0;
    y = 0;
    w = 0;
    h = 0;

    context = null;

    constructor(x,y,w,h, context){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        this.context = context;

        console.log(this);
}
draw(){
    this.context
}
}