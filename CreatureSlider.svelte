<script>
  export let mythicalCreaturesImages = [];
  export let selectedCreature;

  const selectCreature = creature => {
    selectedCreature = creature;
  };

  let currentIndex = 0;

  const nextCreature = () => {
    currentIndex = (currentIndex + 1) % mythicalCreaturesImages.length;
    selectedCreature = mythicalCreaturesImages[currentIndex];
  };

  const previousCreature = () => {
    currentIndex =
      (currentIndex - 1 + mythicalCreaturesImages.length) %
      mythicalCreaturesImages.length;
    selectedCreature = mythicalCreaturesImages[currentIndex];
  };
</script>

<div class="slider">
  <button on:click={previousCreature}>Previous</button>

  <div
    class="slide"
    on:click={() => selectCreature(mythicalCreaturesImages[currentIndex])}>
    <img
      src={mythicalCreaturesImages[currentIndex].imageUrl}
      alt={mythicalCreaturesImages[currentIndex].name} />
    <div class="overlay">
      <span>{mythicalCreaturesImages[currentIndex].name}</span>
    </div>
  </div>

  <button on:click={nextCreature}>Next</button>
</div>

<style>
  .slider {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .slide {
    position: relative;
    width: 300px;
    height: 200px;
    overflow: hidden;
  }

  .slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .overlay {
    position: absolute;
    bottom: 10px;
    left: 10px;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 5px;
  }

  button {
    padding: 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background-color: #45a049;
  }
</style>