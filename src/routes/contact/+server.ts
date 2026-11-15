import { HCAPTCHA_SECRET_KEY, FORMSPREE_ENDPOINT } from '$env/static/private';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
  let { captchaToken, name, email, message } = await request.json();

  if (!captchaToken || !name || !email || !message)
    return json({ success: false }, { status: 400 });

  let captchaResponse = await fetch('https://api.hcaptcha.com/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      secret: HCAPTCHA_SECRET_KEY,
      response: captchaToken
    })
  });

  let captchaResult = await captchaResponse.json();

  if (!captchaResult.success)
    return json({ success: false }, { status: 403 });

  let formspreeResponse = await fetch(FORMSPREE_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message })
  });

  if (!formspreeResponse.ok)
    return json({ success: false }, { status: 502 });

  return json({ success: true });
}