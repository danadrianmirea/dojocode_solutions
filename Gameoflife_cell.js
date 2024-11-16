export class Cell {
  constructor(column, row, size) {
    this.column = column;
    this.row = row;
    this.size = size;
    this.isAlive = false;
    this.liveNeighborCount = 0;
  }

  draw() {
    if (this.isAlive) {
      fill(color(200, 0, 200));
    } else {
      fill(color(240));
    }
    noStroke();
    rect(
      this.column * this.size + 1,
      this.row * this.size + 1,
      this.size - 1,
      this.size - 1,
    );
  }

  setIsAlive(value) {
    if (value) {
      this.isAlive = true;
    } else {
      this.isAlive = false;
    }
  }

  liveOrDie() {
    if (this.isAlive) {
      if (this.liveNeighborCount < 2 || this.liveNeighborCount > 3) {
        this.isAlive = false;
      }
    } else {
      if (this.liveNeighborCount === 3) {
        this.isAlive = true;
      }
    }
  }
}