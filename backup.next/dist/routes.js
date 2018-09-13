'use strict';

/* "()" means this requiring returns a function.
 * And after the requiring, the function immediately
 * begins to run.
 */
var routes = require('next-routes')();

/* "/campaigns/:address" means a web address which has
 * "address"-type variable following "/campaigns/".
 */

/* "/campaign/new" must be put before "/campaign/:address"
 * because Next-Route believes that "/campaign/new" is a
 * part of "campaign/:address".
 */
routes.add('/campaigns/new', '/campaigns/new').add('/campaigns/:address', '/campaigns/show').add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/new', '/campaigns/requests/new');

/* Export the helper.
 */
module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUlBLElBQU0sU0FBUyxBQUFmOztBQUVBOzs7O0FBSUE7Ozs7QUFJQSxPQUFPLEFBQVAsSUFBVyxBQUFYLGtCQUE2QixBQUE3QixrQkFDTyxBQURQLElBQ1csQUFEWCx1QkFDa0MsQUFEbEMsbUJBRU8sQUFGUCxJQUVXLEFBRlgsZ0NBRTJDLEFBRjNDLDZCQUdPLEFBSFAsSUFHVyxBQUhYLG9DQUcrQyxBQUgvQzs7QUFLQTs7QUFFQSxPQUFPLEFBQVAsVUFBaUIsQUFBakIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2tlbmluZy90dXRvcmlhbC9ldGhlcmV1bS9FdGhlcmV1bS1LaWNrU3RhcnQifQ==