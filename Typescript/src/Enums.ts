enum Direction {
    Up = 10,
    Down,
    Left,
    Right
}

function doSomething(keyPressed: Direction) {
	if(keyPressed === Direction.Right) {

    }
    console.log(Direction)
    console.log(keyPressed)
}

doSomething(Direction.Right)