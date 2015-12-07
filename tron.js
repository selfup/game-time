'use strict'
$(document).ready( () => {
  keyboardMoves();
})

let canvas = document.getElementById('game')
let context = canvas.getContext('2d')


var Box = function(x, y) {
  this.x = x
  this.y = y
  this.width = 20
  this.height = 20
};

Box.prototype.draw = function () {
  context.fillRect(this.x, this.y, this.width, this.height)
  context.fillStyle = "#FF0000"
  return this
}

Box.prototype.moveRight = function () {
  this.x++
  return this
}

var animation = {
  boxes: [new Box(0, 280)],
  draw: function () {
    this.boxes.forEach(function (box) {
      return box.draw
    })
    return this
  },
  moveRight: function () {
    this.boxes.forEach( function (box) {
      return box.moveRight
    })
    return this
  }
}

// $('body').on('keyup', () => {
//   if (event.which === 39) {
//     move()
//   }
// })

function keyboardMoves () {
  $('body').on('keyup', function(event) {
    switch(event.which) {
        case 37: // left
        break;

        case 38: // up
        break;

        case 39:
        move();

        case 40: // down
        break;

        default: return; // exit this handler for other keys
    }
    event.preventDefault(); // prevent the default action (scroll / move caret)
  })
};

var move = () => {
    requestAnimationFrame( function gameLoop() {
      context.clearRect(0, 0, canvas.width, canvas.height)
      animation.boxes.forEach(function (box){
      box.draw().moveRight()
    })
  requestAnimationFrame(gameLoop)
  })
}
