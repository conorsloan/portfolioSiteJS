/**
 * Created by conor on 24/08/2014.
 */

var app = require('../app');

var ipaddr = process.env.OPENSHIFT_INTERNAL_IP || "127.0.0.1";
var port = process.env.OPENSHIFT_INTERNAL_PORT || 8080;

app.set('port', port);
app.set('ipaddr', ipaddr);

var server = app.listen(app.get('port'), app.get('ipaddr'));

