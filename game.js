
const player1 = new Player(0,0,100,100, context);
const player2  = new Player(100,100,200,200, context);



function gameLoop(){

    // context.fillStyle = 'blue';
    // context.fillRect(100, 100, 100, 100);

    window.requestAnimationFrame(gameLoop);
    player1.draw();
    player2.draw();

}

gameLoop();