/* "()" means this requiring returns a function.
 * And after the requiring, the function immediately
 * begins to run.
 */
const routes = require('next-routes')();

/* "/campaigns/:address" means a web address which has
 * "address"-type variable following "/campaigns/".
 */

/* "/campaign/new" must be put before "/campaign/:address"
 * because Next-Route believes that "/campaign/new" is a
 * part of "campaign/:address".
 */
routes.add('/campaigns/new', '/campaigns/new')
      .add('/campaigns/:address', '/campaigns/show')
      .add('/campaigns/:address/requests', '/campaigns/requests/index')
      .add('/campaigns/:address/requests/new', '/campaigns/requests/new');

/* Export the helper.
 */
module.exports = routes;
