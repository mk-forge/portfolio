<script lang="ts">
  import { page } from '$app/state';
  import { onMount } from 'svelte';
  import { LightModeIcon, DarkModeIcon, LightModeIconOriginal, DarkModeIconOriginal } from '$lib/assets/icons';
  import ColorfulToggle from './ColorfulToggle.svelte';

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

  <div class="nav-buttons">
    {#if page.url.pathname == '/' || page.url.pathname == '/projects'}
      <ColorfulToggle/>
    {/if}

    <button class="theme-toggle" onclick={toggleTheme} title={isDark ? 'Přepnout na světlý režim' : 'Přepnout na tmavý režim'}>
      {#if isDark}
        <img src={LightModeIcon} alt="" class="theme-logo theme-logo-mono"/>
        <img src={LightModeIconOriginal} alt="" class="theme-logo theme-logo-color"/>
      {:else}
        <img src={DarkModeIcon} alt="" class="theme-logo theme-logo-mono"/>
        <img src={DarkModeIconOriginal} alt="" class="theme-logo theme-logo-color"/>
      {/if}
    </button>
  </div>
</nav>