# cors-proxy-worker
Simple CORS Proxy.

## How to Use
```bash
$ TARGET_URL=https://example.com
$ curl -s  https://<Your CORS Proxy Hostname>/$TARGET_URL
```

## Deploy
```bash
$ wrangler deploy --minify ./index.js
```

## Author
[shinosaki](https://shinosaki.com/)

## LICENSE
[MIT](./LICENSE)
