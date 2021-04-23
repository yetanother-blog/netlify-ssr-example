const Parser = require('rss-parser');
const nunjucks = require('nunjucks');
const fs = require('fs');
const path = require('path');

const parser = new Parser();
nunjucks.configure({ autoescape: true });

exports.handler = async () => {
  const feed = await parser.parseURL('https://news.ycombinator.com/rss');
  const html = fs.readFileSync(path.join(__dirname, './html.njk'), 'utf-8');

  return {
    statusCode: 200,
    body: nunjucks.renderString(html, { items: feed.items })
  }
}