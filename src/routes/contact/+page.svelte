<svelte:head>
  <title>MK | Kontakt: formulář s informacemi</title>
  <script src="https://web3forms.com/client/script.js" async defer></script>
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

    let formData = new FormData();
    formData.append('access_key', '80ffbca7-a548-4175-9ed7-0bb9b0195fe4');
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    let captchaToken = document.querySelector<HTMLTextAreaElement>('textarea[name="h-captcha-response"]')?.value;
    if (!captchaToken) {
      error = 'Prosím, potvrď captchu.';
      return;
    }

    formData.append('h-captcha-response', captchaToken);

    try {
      let w3fResponse = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      if (!w3fResponse.ok) {
        error = 'Zprávu se nepodařilo odeslat. Zkus to znovu.';
        return;
      }

      sent = true;
      name = '';
      email = '';
      message = '';
    } catch {
      error = 'Chyba připojení. Zkus to později.';
    }
  }
</script>

<div class="page" class:hydrated>
  <div class="contact-page">
    <h1 class="heading"><span class="heading-prefix">></span> Kontakt</h1>
    <p class="subtitle">Napiš mi zprávu a ozvu se co nejdříve.</p>

    <div class="info-box">
      <img src="/info.png" alt=""/>
      <span>Před odesláním je nutné zaškrtnout captchu. Zpráva pak dorazí přímo do mé e-mailové schránky.</span>
    </div>

    <form onsubmit={handleSubmit}>
      <input type="hidden" name="access_key" value="80ffbca7-a548-4175-9ed7-0bb9b0195fe4"/>
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
      <div class="h-captcha" data-captcha="true"></div>
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
          <span>{error}</span>
        </div>
      {/if}
    </form>
  </div>
</div>