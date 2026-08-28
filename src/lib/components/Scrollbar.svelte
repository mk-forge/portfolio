<script lang="ts">
  import { onMount } from 'svelte';
  import { OverlayScrollbars } from 'overlayscrollbars';
  import { scrollState } from '$lib/scrollState.svelte';
  import 'overlayscrollbars/overlayscrollbars.css';
  import '$lib/styles/scrollbar.css';

  let container: HTMLDivElement;
  let { children } = $props();

  onMount(() => {
    let os = OverlayScrollbars(container, {
      scrollbars: {
        autoHide: 'leave',
        autoHideDelay: 200,
        theme: 'os-theme-light',
        clickScroll: true
      }
    });

    let viewport = os.elements().viewport;
    scrollState.pageViewport = viewport;

    function handleScroll() {
      scrollState.pageY = viewport.scrollTop;
    }

    viewport.addEventListener('scroll', handleScroll);

    return () => {
      viewport.removeEventListener('scroll', handleScroll);
      scrollState.pageViewport = null;
      os.destroy();
    };
  });
</script>

<div bind:this={container} class="scroll-container">
  {@render children()}
</div>