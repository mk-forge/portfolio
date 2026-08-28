<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { Navbar, Footer, Scrollbar, ScrollToTop } from "$lib/components";
	import "$lib/styles/app.css";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon}/>
	<link rel="preconnect" href="https://fonts.googleapis.com"/>
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"/>
	<link href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500;600;700&display=swap" rel="stylesheet"/>

	<meta property="og:title" content="MK | Vývojář"/>
	<meta property="og:description" content="Osobní portfolio a projekty vývojáře se zájmem o systémové programování a webové technologie."/>
	<meta property="og:image" content="https://mk-forge.netlify.app/og-image.png"/>
	<meta property="og:url" content="https://mk-forge.netlify.app"/>
	<meta property="og:type" content="website"/>
	<meta property="og:site_name" content="MK | Vývojář"/>

	<meta name="twitter:card" content="summary_large_image"/>
	<meta name="twitter:title" content="MK | Vývojář"/>
	<meta name="twitter:description" content="Osobní portfolio a projekty vývojáře se zájmem o systémové programování a webové technologie."/>
	<meta name="twitter:image" content="https://mk-forge.netlify.app/og-image.png"/>
</svelte:head>

<Scrollbar>
  <Navbar/>
  {@render children()}
  <Footer/>
  <ScrollToTop/>
</Scrollbar>