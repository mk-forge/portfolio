<svelte:head>
  <title>MK | Kontakt: formulář s informacemi</title>
</svelte:head>

<script lang="ts">
  import { onMount } from 'svelte';
  import "$lib/styles/contact.css";

  let name = $state('');
  let email = $state('');
  let message = $state('');
  let honeypot = $state('');
  let sent = $state(false);
  let error = $state('');
  let hydrated = $state(false);

  onMount(() => {
    hydrated = true;
  });

  async function handleSubmit(event: Event) {
    event.preventDefault();
    sent = false;
    error = '';

    if (honeypot) {
      sent = true;
      return;
    }

    try {
      let response = await fetch('https://formspree.io/f/mvkpekbr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      });

      if (response.ok) {
        sent = true;
        name = '';
        email = '';
        message = '';
      } else {
        error = 'Nepodařilo se odeslat. Zkus to prosím znovu.';
      }
    } catch {
      error = 'Chyba připojení. Zkus to později.';
    }
  }
</script>

<div class="page" class:hydrated>
  <div class="contact-page">
    <h1 class="heading"><span class="heading-prefix">></span> Kontakt</h1>
    <p class="subtitle">Napište mi zprávu a ozvu se co nejdříve.</p>

    <div class="info-box">
      <img src="/info.png" alt=""/>
      <span>Po odeslání formuláře proběhne ověření, že nejste robot. Vaše zpráva bude doručena přímo do mé e-mailové schránky.</span>
    </div>

    <form onsubmit={handleSubmit}>
      <label>
        <span>Jméno</span>
        <input type="text" bind:value={name} required/>
      </label>
      <label>
        <span>E-mail</span>
        <input type="email" bind:value={email} required/>
      </label>
      <label>
        <span>Zpráva</span>
        <textarea bind:value={message} rows="5" required></textarea>
      </label>
      <input type="text" bind:value={honeypot} tabindex="-1" autocomplete="off" class="honeypot"/>
      <button type="submit">Odeslat</button>

      {#if sent}
        <div class="success-box">
          <img src="/success.png" alt=""/>
          <span>Zpráva byla odeslána.</span>
        </div>
      {/if}
      {#if error}
        <div class="error-box">
          <img src="/error.png" alt=""/>
          <span>Zprávu se nepodařilo odeslat: {error}</span>
        </div>
      {/if}
    </form>
  </div>
</div>