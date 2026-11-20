export async function handle({ event, resolve }) {
  let response = await resolve(event);
  response.headers.set('Cross-Origin-Opener-Policy', 'same-origin');
  
  if (!response.headers.has('Cache-Control')) {
    let url = event.url.pathname;
    let ext = url.split('.').pop() ?? '';

    let cacheControl;
    if (url == '/' || !ext.includes('.'))
      cacheControl = 'no-cache';
    else
      cacheControl = 'public, max-age=31536000, immutable';

    response.headers.set('Cache-Control', cacheControl);
  }

  return response;
}