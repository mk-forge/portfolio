import { FORMSPREE_ENDPOINT } from '$env/static/private';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
  let { captchaToken, name, email, message } = await request.json();

  if (!captchaToken || !name || !email || !message)
    return json({ success: false }, { status: 400 });

  let formspreeResponse = await fetch(FORMSPREE_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Origin': 'https://portfolio.mk-forge.workers.dev',
      'Referer': 'https://portfolio.mk-forge.workers.dev/contact',
      'User-Agent': request.headers.get('User-Agent') ?? 'Mozilla/5.0'
    },
    body: JSON.stringify({ name, email, message, 'h-captcha-response': captchaToken })
  });

  if (!formspreeResponse.ok)
    return json({ success: false }, { status: 502 });

  return json({ success: true });
}