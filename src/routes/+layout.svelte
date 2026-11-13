<script lang="ts">
  import favicon from "$lib/assets/favicon.png";
  import { Navbar, Footer, Scrollbar, ScrollToTop } from "$lib/components";
  import "$lib/styles/app.css";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon}/>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"/>
  <link href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500;600;700&display=swap" rel="stylesheet"/>
  <link rel="canonical" href="https://portfolio.mk-forge.workers.dev/"/>

  <meta property="og:title" content="MK | Vývojář"/>
  <meta property="og:description" content="Osobní portfolio a projekty vývojáře se zájmem o systémové programování a webové technologie."/>
  <meta property="og:image" content="https://portfolio.mk-forge.workers.dev/og-image.png"/>
  <meta property="og:image:width" content="1200"/>
  <meta property="og:image:height" content="630"/>
  <meta property="og:url" content="https://portfolio.mk-forge.workers.dev/"/>
  <meta property="og:type" content="website"/>
  <meta property="og:site_name" content="MK | Vývojář"/>
  <meta property="og:locale" content="cs_CZ"/>

  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:title" content="MK | Vývojář"/>
  <meta name="twitter:description" content="Osobní portfolio a projekty vývojáře se zájmem o systémové programování a webové technologie."/>
  <meta name="twitter:image" content="https://portfolio.mk-forge.workers.dev/og-image.png"/>
  <meta name="twitter:image:alt" content="MK | Vývojář"/>
</svelte:head>

<Scrollbar>
  <Navbar/>
  <main>
    {@render children()}
  </main>
  <Footer/>
  <ScrollToTop/>
</Scrollbar>