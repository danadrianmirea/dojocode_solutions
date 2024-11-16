<script>
  let currentLevel = 0;
  let selectedSymbols = [];
  let message = "";
  let levels = [
    {
      levelTitle: "First Puzzle",
      riddles: [
        "I emerge in the night's embrace, yet I am not the darkest of all.",
        "I shine the brightest, bringing warmth to the day.",
        "I descend from the heavens to kiss the earth, a precursor to the rainbow.",
        "I twinkle far away, guiding sailors and inspiring poets.",
      ],
      symbols: [
        { display: "☀", value: "sun" },
        { display: "☾", value: "moon" },
        { display: "★", value: "star" },
        { display: "☔", value: "rain" },
      ],
      correctOrder: ["moon", "sun", "rain", "star"],
    },
    {
      levelTitle: "Second Puzzle",
      riddles: [
        "Forward I am heavy, but backward I am not. What am I?",
        "A box without hinges, key, or lid, yet golden treasure inside is hid.",
        "What has roots as nobody sees, is taller than trees, up, up it goes, and yet never grows?",
        "I speak without a mouth and hear without ears. I have nobody, but I come alive with the wind.",
      ],
      symbols: [
        { display: "📦", value: "box" },
        { display: "⏳", value: "hourglass" },
        { display: "🌬️", value: "wind" },
        { display: "🌲", value: "tree" },
      ],
      correctOrder: ["hourglass", "box", "tree", "wind"],
    },
  ];

  let firstSymbolClicked = false;

  function selectSymbol(symbol) {
    message = "";

    if (selectedSymbols.includes(symbol.value)) {
      message = "Symbol already selected!";
      return;
    }

    if (!firstSymbolClicked) {
      firstSymbolClicked = true;
    }

    selectedSymbols.push(symbol.value);
    if (selectedSymbols.length === levels[currentLevel].correctOrder.length) {
      checkAnswer();
    }
  }

  function checkAnswer() {
    const currentLevelData = levels[currentLevel];
    if (
      JSON.stringify(selectedSymbols) ===
      JSON.stringify(currentLevelData.correctOrder)
    ) {
      if (currentLevel == levels.length - 1) {
        message = "Congratulations, you won the entire game!";
      } else {
        message = 'Correct! Click "Next Level" to proceed.';
      }
    } else {
      message = "Try again!";
    }
  }

  function nextLevel() {
    if (currentLevel < levels.length - 1) {
      currentLevel++;
      selectedSymbols = [];
      message = "";
      firstSymbolClicked = false; // Reset first symbol state
    } else {
      message = "Congratulations, you won the entire game!";
    }
  }

  function resetLevel() {
    selectedSymbols = [];
    message = "";
    firstSymbolClicked = false; // Reset first symbol state
  }

  function resetGame() {
    currentLevel = 0;
    selectedSymbols = [];
    message = "";
    firstSymbolClicked = false;
  }
</script>

<main>
  <h1>{levels[currentLevel].levelTitle}</h1>
  <div>
    {#each levels[currentLevel].riddles as riddle}
      <p>{riddle}</p>
    {/each}
  </div>

  <div class="symbols">
    {#each levels[currentLevel].symbols as symbol}
      <button
        class:selected={selectedSymbols.includes(symbol.value) ||
          (firstSymbolClicked && !selectedSymbols.includes(symbol.value))}
        on:click={() => selectSymbol(symbol)}>
        {symbol.display}
      </button>
    {/each}
  </div>

  {#if message}
    <p>{message}</p>
  {/if}

  {#if selectedSymbols.length === levels[currentLevel].correctOrder.length}
    <button on:click={nextLevel}>Next Level</button>
  {/if}

  <button on:click={resetLevel}>Reset Level</button>
  <button on:click={resetGame}>Reset Game</button>
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
  * {
    font-family: "Poppins";
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    height: 100%;
    width: 100%;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .symbols {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
  }

  button {
    background-color: #444;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 24px;
    font-weight: 600;
    margin: 5px;
    padding: 10px 15px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button.selected,
  button:hover {
    background-color: green;
  }

  button:focus {
    outline: none;
  }

  p,
  h1 {
    margin: 0 0 20px;
  }
</style>