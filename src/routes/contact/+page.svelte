<svelte:head>
  <title>MK | Kontakt</title>
</svelte:head>

<script lang="ts">
  import "$lib/styles/contact.css";

  let name = $state('');
  let email = $state('');
  let message = $state('');
  let sent = $state(false);
  let error = $state('');

  async function handleSubmit(event: Event) {
    event.preventDefault();
    sent = false;
    error = '';

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

<div class="page">
  <div class="contact-page">
    <h1 class="heading"><span class="heading-prefix">></span> Kontakt</h1>
    <p class="subtitle">Napište mi zprávu a ozvu se co nejdříve.</p>

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
      <button type="submit">Odeslat</button>

      {#if sent}
        <div class="success">
          <img src="/success.png" alt=""/>
          <span>Zpráva byla odeslána.</span>
        </div>
      {/if}
      {#if error}
        <div class="error">
          <img src="/error.png" alt=""/>
          <span>Zprávu se nepodařilo odeslat: {error}</span>
        </div>
      {/if}
    </form>
    <hr/>
  </div>
</div>