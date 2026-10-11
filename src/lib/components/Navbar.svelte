<script lang="ts">
  import { page } from '$app/state';
  import { onMount } from 'svelte';
  import { LightModeIcon, DarkModeIcon, LightModeIconOriginal, DarkModeIconOriginal, MenuIcon, MenuIconOriginal, MenuXIcon, MenuXIconOriginal } from '$lib/assets/icons';
  import ColorfulToggle from './ColorfulToggle.svelte';

  let isDark = $state(false);
  let menuOpen = $state(false);

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

  function closeMenu() {
    menuOpen = false;
  }
</script>

<nav>
  <button
    class="hamburger"
    onclick={() => menuOpen = !menuOpen}
    aria-label={menuOpen ? 'Zavřít menu' : 'Otevřít menu'}
    aria-expanded={menuOpen}
  >
    {#if menuOpen}
      <img src={MenuXIcon} alt="" class="hamburger-icon hamburger-icon-mono"/>
      <img src={MenuXIconOriginal} alt="" class="hamburger-icon hamburger-icon-color"/>
    {:else}
      <img src={MenuIcon} alt="" class="hamburger-icon hamburger-icon-mono"/>
      <img src={MenuIconOriginal} alt="" class="hamburger-icon hamburger-icon-color"/>
    {/if}
  </button>

  <div class="nav-desktop">
    <a href="/" class:active={page.url.pathname == '/'}>Domů</a>
    <a href="/projects" class:active={page.url.pathname == '/projects'}>Projekty</a>
    <a href="/contact" class:active={page.url.pathname == '/contact'}>Kontakt</a>
  </div>

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

{#if menuOpen}
  <div class="mobile-menu">
    <a href="/" class:active={page.url.pathname == '/'} onclick={closeMenu}>Domů</a>
    <a href="/projects" class:active={page.url.pathname == '/projects'} onclick={closeMenu}>Projekty</a>
    <a href="/contact" class:active={page.url.pathname == '/contact'} onclick={closeMenu}>Kontakt</a>
  </div>
{/if}