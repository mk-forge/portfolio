<script>
  import { page } from '$app/state';
  import { onMount } from 'svelte';
  import { LightModeIcon, DarkModeIcon } from '$lib/assets/icons';

  let isDark = $state(false);

  onMount(() => {
    let theme = localStorage.getItem('theme');
    if (theme == 'dark') {
      isDark = true;
      document.body.classList.add('dark');
    } else if (theme == 'light') {
      isDark = false;
      document.body.classList.remove('dark');
    }
  });

  function toggleTheme() {
    isDark = !isDark;
    document.body.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }
</script>

<nav>
  <a href="/" class:active={page.url.pathname == '/'}>Domů</a>
  <a href="/projects" class:active={page.url.pathname == '/projects'}>Projekty</a>
  <a href="/contact" class:active={page.url.pathname == '/contact'}>Kontakt</a>
  <button class="theme-toggle" onclick={toggleTheme}>
    {#if isDark}
      <img src={LightModeIcon} alt="Light Mode" class="theme-logo"/>
    {:else}
      <img src={DarkModeIcon} alt="Dark Mode" class="theme-logo"/>
    {/if}
  </button>
</nav>