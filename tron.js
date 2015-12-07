'use strict'

let canvas = document.getElementById('game')
let context = canvas.getContext('2d')


var Box = function(x, y) {
  this.x = x
  this.y = y
  this.width = 10
  this.height = 10
};

Box.prototype.draw = function () {
  context.fillRect(this.x, this.y, this.width, this.height)
  context.fillStyle = "#FF0000"
  return this
}

Box.prototype.move = function () {
  this.y
  return this
}

var animation = {
  boxes: [new Box(50, 50)],
  draw: function () {
    this.boxes.forEach(function (box) {
      return box.draw
    })
    return this
  },
  move: function () {
    this.boxes.forEach( function (box) {
      return box.move
    })
    return this
  }
}

requestAnimationFrame( function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height)
    animation.boxes.forEach(function (box){
      box.draw().move()
    })
    requestAnimationFrame(gameLoop)
})
