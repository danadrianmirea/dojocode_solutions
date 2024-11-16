<script>
  import CreatureSlider from "./components/CreatureSlider.svelte";
  import CreatureDetail from "./components/CreatureDetail.svelte";

  let mythicalCreaturesImages = [
    {
      id: 1,
      name: "Creature 1",
      imageUrl:
        "https://as1.ftcdn.net/v2/jpg/05/71/99/54/1000_F_571995495_bGGkhksNEHiSUNnlOSU2nxOObZLaaHEZ.jpg",
      description: "Creature 1 description.",
    },
    {
      id: 2,
      name: "Creature 2",
      imageUrl:
        "https://t3.ftcdn.net/jpg/05/76/27/06/240_F_576270606_eupZ7wmgSIMLviJmiD1NH24PLcWkD3Rg.jpg",
      description: "Creature 2 description.",
    },
  ];

  let selectedCreature = mythicalCreaturesImages[0];
</script>

<main>
  <CreatureSlider {mythicalCreaturesImages} bind:selectedCreature />
  <CreatureDetail {selectedCreature} />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
</style>