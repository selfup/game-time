'use strict'
$(document).ready( () => {
  keyboardMoves()
  startLeftPlayer()
  resetGame()
})

let canvas = document.getElementById('game')
let context = canvas.getContext('2d')

var Box = function(x, y) {
  this.x = x
  this.y = y
  this.width = 20
  this.height = 20
  this.position = 1
}

Box.prototype.draw = function () {
  context.fillStyle = "#FF0000"
  context.shadowColor = "#FF0000"
  context.fillRect(this.x, this.y, this.width, this.height)
  return this
}

Box.prototype.moveRight = function () {
  this.x += this.position
  return this
}

Box.prototype.moveDown = function () {
  this.y += this.position
  return this
}

Box.prototype.moveUp = function () {
  this.y -= this.position
  return this
}

Box.prototype.moveLeft = function () {
  this.x -= this.position
  return this
}

Box.prototype.resetGame = function () {
  this.x = 0
  this.y = 280
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
  },
  resetGame: function () {
    this.boxes.forEach( function (box) {
      return box.resetGame
    })
    return this
  }
}

function keyboardMoves () {
  $('body').on('keydown', function(event) {
    switch(event.which) {
        case 37: // left
        return left()

        case 38: // up
        return up()

        case 39: // right
        return right()

        case 40: // down
        return down()

        default: return; // exit this handler for other keys
    }
    event.preventDefault(); // prevent the default action (scroll / move caret)
  })
}


var right = () => {
    requestAnimationFrame( function gameLoop() {
      context.clearRect(0, 0, canvas.width, canvas.height)
      animation.boxes.forEach(function (box){
      box.draw().moveRight()
    })
    console.log("right")
    requestAnimationFrame(gameLoop)
  })
}

var down = () => {
    requestAnimationFrame( function gameLoop() {
      context.clearRect(0, 0, canvas.width, canvas.height)
      animation.boxes.forEach(function (box){
      box.draw().moveDown()
    })
    console.log("down")
    requestAnimationFrame(gameLoop)
  })
}

var up = () => {
    requestAnimationFrame( function gameLoop() {
      context.clearRect(0, 0, canvas.width, canvas.height)
      animation.boxes.forEach(function (box){
      box.draw().moveUp()
    })
    console.log("up")
    requestAnimationFrame(gameLoop)
  })
}

var left = () => {
    requestAnimationFrame( function gameLoop() {
      context.clearRect(0, 0, canvas.width, canvas.height)
      animation.boxes.forEach(function (box){
      box.draw().moveLeft()
    })
    console.log("left")
    requestAnimationFrame(gameLoop)
  })
}

var startLeftPlayer = () => {
  $('#start').on('click', function(event) {
    right()
  })
}

var resetGame = () => {
  $('#reset').on('click', function(event) {
    requestAnimationFrame( function gameLoop() {
      context.clearRect(0, 0, canvas.width, canvas.height)
      animation.boxes.forEach(function (box){
      box.draw().resetGame()
    })
  })
    requestAnimationFrame( function gameLoop() {
      context.clearRect(0, 0, canvas.width, canvas.height)
      animation.boxes.forEach(function (box){
      box.draw().resetGame()
      })
    })
  })
}
