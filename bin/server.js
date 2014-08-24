/**
 * Created by conor on 24/08/2014.
 */

var debug = require('debug')('portfolioSite');
var app = require('../app');

app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 8080);
app.set('ipaddr', server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1');

var server = app.listen(app.get('port'), function() {
    debug('Express server listening on port ' + server.address().port);
});
