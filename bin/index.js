const app = require("./app");
const config = require("./../etc/dev.config");

app.set('port', config.PORT || 1337);
app.set('address', config.ADDRESS || 'localhost');
const server = app.listen(app.get('port'), app.get('address'), function () {
  console.log( 'started dev server.' );
  console.log('Express server listening at http://%s:%s', server.address().address, server.address().port);
});
