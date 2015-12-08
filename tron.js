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

Box.prototype.moveDown = function () {
  this.x -= 1
  this.y++
  return this
}

Box.prototype.moveUp = function () {
  this.x -= 1
  this.y--
  return this
}

Box.prototype.moveLeft = function () {
  this.x -= 1
  this.x--
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
  },
  moveDown: function () {
    this.boxes.forEach( function (box) {
      return box.moveRight
    })
    return this
  },
  moveUp: function () {
    this.boxes.forEach( function (box) {
      return box.moveUp
    })
    return this
  },
  moveLeft: function () {
    this.boxes.forEach( function (box) {
      return box.moveLeft
    })
    return this
  }
}

function keyboardMoves () {
  $('body').on('keyup', function(event) {
    switch(event.which) {
        case 37: // left
        return left()

        case 38: // up
        return up()

        case 39:
        return right()

        case 40: // down
        return down()

        default: return; // exit this handler for other keys
    }
    event.preventDefault(); // prevent the default action (scroll / move caret)
  })
};

var right = () => {
    requestAnimationFrame( function gameLoop() {
      context.clearRect(0, 0, canvas.width, canvas.height)
      animation.boxes.forEach(function (box){
      box.draw().moveRight()
    })
  requestAnimationFrame(gameLoop)
  })
}

var down = () => {
    requestAnimationFrame( function gameLoop() {
      context.clearRect(0, 0, canvas.width, canvas.height)
      animation.boxes.forEach(function (box){
      box.draw().moveDown()
    })
  requestAnimationFrame(gameLoop)
  })
}

var up = () => {
    requestAnimationFrame( function gameLoop() {
      context.clearRect(0, 0, canvas.width, canvas.height)
      animation.boxes.forEach(function (box){
      box.draw().moveUp()
    })
  requestAnimationFrame(gameLoop)
  })
}

var left = () => {
    requestAnimationFrame( function gameLoop() {
      context.clearRect(0, 0, canvas.width, canvas.height)
      animation.boxes.forEach(function (box){
      box.draw().moveLeft()
    })
  requestAnimationFrame(gameLoop)
  })
}
