const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`Input S number: `, (inputNumber) => {
  var result = [];
  var maxYBorder = inputNumber;
  var maxXBorder = 0;
  var currentX = 0;
  var currentY = 0;
  var repeatSpiral = (inputNumber + 1) / 4;
  for (var i = 0; i < repeatSpiral; i++) {
    //write to right
    while (currentX < maxYBorder) {
      result.push([currentX, currentY]);
      currentX++;
    }
    currentX--;
    //write to top
    while (currentY < maxYBorder) {
      result.push([currentX, currentY]);
      currentY++;
    }
    currentY--;
    //write to left
    while (currentX >= maxXBorder) {
      result.push([currentX, currentY]);
      currentX--;
    }
    currentX++;
    maxXBorder += 2;
    //write to bottom
    while (currentY >= maxXBorder) {
      result.push([currentX, currentY]);
      currentY--;
    }
    currentY++;
    maxYBorder -= 2;
  }

  console.log("Matrix: ");
  console.log(result);
  console.log("Maze: ");
  makeSpiralFromMatrix(result, inputNumber);
  readline.close();
});

function makeSpiralFromMatrix(matrix, maxRows) {
  for (var j = 0; j < maxRows; j++) {
    var text = "";
    for (var k = 0; k < maxRows; k++) {
      if (matrix.filter((i) => i[0] === j && i[1] === k).length > 0)
        text += "@";
      else text += " ";
    }
    console.log(text);
  }
}
