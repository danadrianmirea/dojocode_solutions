import { Cell } from "./Cell";

export class Grid {
  constructor(cellSize) {
    this.cellSize = cellSize;
    this.numberOfColumns = floor(width / this.cellSize);
    this.numberOfRows = floor(height / this.cellSize);

    this.cells = new Array(this.numberOfColumns);
    for (let column = 0; column < this.numberOfColumns; column++) {
      this.cells[column] = new Array(this.numberOfRows);
    }

    for (let column = 0; column < this.numberOfColumns; column++) {
      for (let row = 0; row < this.numberOfRows; row++) {
        this.cells[column][row] = new Cell(column, row, cellSize);
      }
    }
  }

  draw() {
    for (let column = 0; column < this.numberOfColumns; column++) {
      for (let row = 0; row < this.numberOfRows; row++) {
        this.cells[column][row].draw();
      }
    }
  }

  randomize() {
    for (let column = 0; column < this.numberOfColumns; column++) {
      for (let row = 0; row < this.numberOfRows; row++) {
        const value = floor(random(2));
        this.cells[column][row].setIsAlive(value);
      }
    }
  }

  reset() {
    for (let column = 0; column < this.numberOfColumns; column++) {
      for (let row = 0; row < this.numberOfRows; row++) {
        this.cells[column][row].setIsAlive(false);
      }
    }
  }

  load(data) {
    for (let column = 0; column < this.numberOfColumns; column++) {
      for (let row = 0; row < this.numberOfRows; row++) {
        this.cells[column][row].setIsAlive(!!data?.[column]?.[row]);
      }
    }
  }

  updateNeighborCounts() {
    for (let column = 0; column < this.numberOfColumns; column++) {
      for (let row = 0; row < this.numberOfRows; row++) {
        const currentCell = this.cells[column][row];
        const neighbors = this.getNeighbors(currentCell);

        let liveNeighbors = 0;
        for (const neighbor of neighbors) {
          if (neighbor.isAlive) {
            liveNeighbors++;
          }
        }

        currentCell.liveNeighborCount = liveNeighbors;
      }
    }
  }

  getNeighbors(currentCell) {
    const neighbors = [];
    const { column, row } = currentCell;

    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue;

        const neighborColumn = column + i;
        const neighborRow = row + j;

        if (this.isValidPosition(neighborColumn, neighborRow)) {
          neighbors.push(this.cells[neighborColumn][neighborRow]);
        }
      }
    }

    return neighbors;
  }

  isValidPosition(column, row) {
    const validColumn = column >= 0 && column < this.numberOfColumns;
    const validRow = row >= 0 && row < this.numberOfRows;

    return validColumn && validRow;
  }

  updatePopulation() {
    for (let column = 0; column < this.numberOfColumns; column++) {
      for (let row = 0; row < this.numberOfRows; row++) {
        this.cells[column][row].liveOrDie();
      }
    }
  }
}