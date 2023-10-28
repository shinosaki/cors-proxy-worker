export default {
  async fetch(req, env, ctx) {
    const DefaultResponse = new Response(`<h1><a href="https://github.com/shinosaki/cors-proxy-worker">Simple CORS Proxy</a></h1>
    <form>
      <label>URL: <input name="url"></label>
      <button>Submit</button>
    </form>`, { headers: { 'content-type': 'text/html' } });

    const url = new URL(req.url);
    const target = url.search.startsWith('?url=')
      ? url.search.substring(5)
      : url.pathname.substring(1) + url.search;

    if (!target) return DefaultResponse;
    console.log('Target URL:', decodeURIComponent(target));

    const res = await fetch(new Request(decodeURIComponent(target), req));

    const newRes = new Response(res.body, res);
    newRes.headers.append('access-control-allow-origin', '*');

    return newRes;
  },
};
