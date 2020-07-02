const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`Input S number: `, (inputNumber) => {
  var mazeGen = new MazeGenerator(inputNumber, inputNumber);
  mazeGen.build();
  console.log("Maze: ");
  mazeGen.show();
  readline.close();
});


class MazeGenerator {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.currentX = 0;
    this.currentY = 0;
    this.maxXBorder = 0;
    this.maxYBorder = height;
    this.result = [];
  }

  build() {
    var repeatSpiral = (this.width + 1) / 4;
    for (var i = 0; i < repeatSpiral; i++) {
      //write to right
      while (this.currentX < this.maxYBorder) {
        this.result.push([this.currentX, this.currentY]);
        this.currentX++;
      }
      this.currentX--;
      //write to top
      while (this.currentY < this.maxYBorder) {
        this.result.push([this.currentX, this.currentY]);
        this.currentY++;
      }
     this.currentY--;
      //write to left
      while (this.currentX >= this.maxXBorder) {
        this.result.push([this.currentX, this.currentY]);
        this.currentX--;
      }
      this.currentX++;
      this.maxXBorder += 2;
      //write to bottom
      while (this.currentY >= this.maxXBorder) {
        this.result.push([this.currentX, this.currentY]);
        this.currentY--;
      }
      this.currentY++;
      this.maxYBorder -= 2;
    }
  }

  show() {
    for (var j = 0; j < this.width; j++) {
      var text = "";
      for (var k = 0; k < this.height; k++) {
        if (this.result.filter((i) => i[0] === j && i[1] === k).length > 0) text += "@";
        else text += " ";
      }
      console.log(text);
    }
  }
}