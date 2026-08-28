<script lang="ts">
  import ArrowUpIcon from '$lib/assets/icons/arrow-up.svg?url';
  import { page } from '$app/state';
  import { scrollState } from '$lib/scrollState.svelte';
  import '$lib/styles/scrolltotop.css';

  let isProjects = $derived(page.url.pathname == '/projects');
  let visible = $derived(isProjects ? scrollState.tabY > 300 && scrollState.pageY > 200 : scrollState.pageY > 200);

  function scrollToTop() {
    if (isProjects && scrollState.tabViewport)
      scrollState.tabViewport.scrollTo({ top: 0, behavior: 'smooth' });
    else if (scrollState.pageViewport)
      scrollState.pageViewport.scrollTo({ top: 0, behavior: 'smooth' });
  }
</script>

{#if visible}
  <button class="scroll-top" onclick={scrollToTop}>
    <img src={ArrowUpIcon} alt="Nahoru"/>
  </button>
{/if}