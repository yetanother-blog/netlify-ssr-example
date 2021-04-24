# Server-side rendering with Netlify

## About

Netlify is an awesome solution to quickly host static assets with a hassle-free development experience. But, in recent years more frameworks (like Next.js or Svelte Kit) established hybrid solutions in terms of providing static assets and server-side rendering. I was curious how that works under the hood and stumbled across a very powerful feature. With just a simple redirect rule, we can redirect all traffic to a Netlify function. This enables us to do server-side rendering with Netlify, without maintaining a complex webserver.

This is just an example project fetching Hacker News's RSS feed and giving back the results in a simple view.

## Local development

```sh
$ > git clone git@github.com:yetanother-blog/netlify-ssr-example
$ > cd netlify-ssr-example

# Install dependencies
$ > yarn

# Spin up server
$ > yarn start
```

Go to http://localhost:8888.

## License

Just a simple [MIT license](./LICENSE).
