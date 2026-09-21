<script lang="ts">
  import { onMount } from 'svelte';
  import { PaletteIconLight, PaletteIconDark, PaletteIconOriginal } from '$lib/assets/icons';

  let colorful = $state(false);

  onMount(() => {
    colorful = localStorage.getItem('colorful') == 'true';
    document.body.classList.toggle('colorful', colorful);
  });

  function toggleColorful() {
    colorful = !colorful;
    document.body.classList.toggle('colorful', colorful);
    localStorage.setItem('colorful', colorful ? 'true' : 'false');
  }
</script>

<button class="colorful-toggle" onclick={toggleColorful} title={colorful ? 'Přepnout na monochromatické ikony' : 'Přepnout na barevné ikony'}>
  {#if colorful}
    <img src={PaletteIconOriginal} alt="" class="theme-logo"/>
  {:else}
    <img src={PaletteIconLight} alt="" class="theme-logo palette-light"/>
    <img src={PaletteIconDark} alt="" class="theme-logo palette-dark"/>
  {/if}
</button>