<script lang="ts">
  import { onMount } from 'svelte';
  import { OverlayScrollbars } from 'overlayscrollbars';
  import 'overlayscrollbars/overlayscrollbars.css';
  import '$lib/styles/scrollbar.css';
  import '$lib/styles/tabpanelscrollbar.css';
  import { scrollState } from '$lib/scrollState.svelte';

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
    scrollState.tabViewport = viewport;

    function handleScroll() {
      scrollState.tabY = viewport.scrollTop;
    }

    viewport.addEventListener('scroll', handleScroll);

    return () => {
      viewport.removeEventListener('scroll', handleScroll);
      scrollState.tabViewport = null;
      os.destroy();
    };
  });
</script>

<div bind:this={container} class="tab-panel-scrollbar">
  {@render children()}
</div>