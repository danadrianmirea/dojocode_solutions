import "p5";
import { Grid } from "./Grid";
import { examples } from "./examples";
import "./styles.css";

let grid;
let play = false;
const cellSize = 18;
const canvasWidth = 400;
const canvasHeight = 400;

function setup() {
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.getElementsByTagName("main")[0]);

  frameRate(12);

  grid = new Grid(cellSize);
  grid.randomize();
  play = true;

  createGameplayButtons();

  createExampleButtons(examples);
}

function draw() {
  background(250);
  if (play) {
    grid?.updateNeighborCounts();
    grid?.updatePopulation();
  }
  beGod();
  grid?.draw();
}

function beGod() {
  if (
    !mouseIsPressed ||
    mouseY < 0 ||
    mouseX < 0 ||
    mouseX > canvasWidth ||
    mouseY > canvasHeight
  )
    return;

  const columnIndex = int(mouseX / cellSize);
  const rowIndex = int(mouseY / cellSize);
  const totalGridLength = int(canvasWidth / cellSize);

  if (
    columnIndex >= 0 &&
    columnIndex < totalGridLength &&
    rowIndex >= 0 &&
    rowIndex < totalGridLength
  ) {
    grid.cells[columnIndex][rowIndex].isAlive = true;
  }
}

function createGameplayButtons() {
  let gameplayButtons = select(".gameplay-buttons");

  let playButton = createButton("Play");
  playButton.attribute("class", "button-6");
  playButton.mousePressed(function () {
    play = true;
  });
  gameplayButtons.child(playButton);

  let stopButton = createButton("Stop");
  stopButton.attribute("class", "button-6");
  stopButton.mousePressed(function () {
    play = false;
  });
  gameplayButtons.child(stopButton);

  let randomButton = createButton("Random");
  randomButton.attribute("class", "button-6");
  randomButton.mousePressed(function () {
    grid.randomize();
  });
  gameplayButtons.child(randomButton);

  let resetButton = createButton("Reset");
  resetButton.attribute("class", "button-6");
  resetButton.mousePressed(function () {
    play = false;
    grid.reset();
  });
  gameplayButtons.child(resetButton);
}

function createExampleButtons(examples) {
  let exampleButtons = select(".example-buttons");

  examples.list.forEach((example, i) => {
    let btn = createButton(example.name);
    btn.attribute("id", "bt-" + (i + 1));
    btn.mousePressed(function () {
      play = false;
      grid.load(example.grid);
    });
    exampleButtons.child(btn);
  });
}

function bootstrap() {
  window.setup = setup;
  window.draw = draw;
}

bootstrap();