<script>
  export let selectedCreature;
</script>

{#if selectedCreature}
  <div class="detail">
    <h2>{selectedCreature.name}</h2>
    <p>{selectedCreature.description}</p>
  </div>
{/if}

<style>
  .detail {
    margin-top: 20px;
    text-align: center;
  }

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    color: #555;
  }
</style>