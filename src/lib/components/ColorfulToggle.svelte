<script lang="ts">
  import { onMount } from 'svelte';
  import { PaletteIcon } from '$lib/assets/icons';

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

<button class="colorful-toggle" onclick={toggleColorful} title="Barevné ikony">
  <img src={PaletteIcon} alt="Barevné ikony" class="theme-logo"/>
</button>