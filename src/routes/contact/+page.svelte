<svelte:head>
  <title>MK | Kontakt: formulář s informacemi</title>
  <link rel="preconnect" href="https://js.hcaptcha.com"/>
</svelte:head>

<script lang="ts">
  import { onMount } from 'svelte';
  import { PUBLIC_HCAPTCHA_SITE_KEY } from '$env/static/public';
  import "$lib/styles/contact.css";

  let name = $state('');
  let email = $state('');
  let message = $state('');
  let honeypot = $state('');
  let sent = $state(false);
  let error = $state('');
  let hydrated = $state(false);
  let isDark = false;
  let captchaContainer: HTMLDivElement;
  let captchaWidgetId: string | undefined;

  function renderCaptcha() {
    if (!captchaContainer || !window.hcaptcha)
      return;

    if (captchaWidgetId)
      window.hcaptcha.remove(captchaWidgetId);

    captchaWidgetId = window.hcaptcha.render(captchaContainer, {
      sitekey: PUBLIC_HCAPTCHA_SITE_KEY,
      theme: isDark ? 'dark' : 'light'
    });
  }

  onMount(() => {
    hydrated = true;
    isDark = document.body.classList.contains('dark');

    if (window.hcaptcha) {
      renderCaptcha();
    } else {
      let captchaScript = document.querySelector<HTMLScriptElement>('script[data-hcaptcha]');
      if (!captchaScript) {
        captchaScript = document.createElement('script');
        // explicit render, otherwise hCaptcha renders without sitekey
        captchaScript.src = 'https://js.hcaptcha.com/1/api.js?render=explicit';
        captchaScript.async = true;
        captchaScript.dataset.hcaptcha = '';
        document.head.appendChild(captchaScript);
      }

      captchaScript.addEventListener('load', renderCaptcha, { once: true });
      captchaScript.addEventListener('error', () => { error = 'Nepodařilo se načíst captchu.'; }, { once: true });
    }

    // theme can't change after render, so render the captcha again
    let observer = new MutationObserver(() => {
      let dark = document.body.classList.contains('dark');
      if (dark != isDark) {
        isDark = dark;
        renderCaptcha();
      }
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    return () => {
      observer.disconnect();
      if (captchaWidgetId)
        window.hcaptcha?.remove(captchaWidgetId);
    };
  });

  async function handleSubmit(event: Event) {
    event.preventDefault();
    sent = false;
    error = '';

    if (honeypot) {
      sent = true;
      return;
    }

    let captchaToken = window.hcaptcha?.getResponse(captchaWidgetId);
    if (!captchaToken) {
      error = 'Prosím, potvrď captchu.';
      return;
    }

    try {
      let contactResponse = await fetch('/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ captchaToken, name, email, message })
      });

      if (!contactResponse.ok) {
        error = 'Zprávu se nepodařilo odeslat. Zkus to znovu.';
        return;
      }

      sent = true;
      name = '';
      email = '';
      message = '';
    } catch {
      error = 'Chyba připojení. Zkus to později.';
    } finally {
      window.hcaptcha?.reset(captchaWidgetId);
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
      <div class="h-captcha" bind:this={captchaContainer}></div>
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