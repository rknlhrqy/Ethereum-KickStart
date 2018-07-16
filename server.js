const { createServer } = require('http');

const next = require('next');

/* Create an instance of next
 */
const app = next({
  /* Set this app in the development mode.
   * Not in production.
   */
  dev: process.env.NODE_ENV != 'production'
});

const routes = require('./routes');
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  createServer(handler).listen(3000, (err) => {
    if (err) throw err;
    console.log('Ready on localhost:3000');
  });
});
