const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const dust = require( 'dustjs-linkedin' );
const cons = require( 'consolidate' );
const path = require( 'path' );
const app = express();

app.use(express.static('media'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended': false }));
app.set('views', path.join(__dirname, '../views'));
app.engine('dust', cons.dust);
app.set('view engine', 'dust');

require('./routes/home.routes')(app);


app.set('template_engine', 'dust');
dust.isDebug = true;
dust.debugLevel = 'ERROR';
app.use(function (req, res, next) {
  res.status(404).send('Sorry cant find that!');
});
app.use(function (err, req, res) {
  res.status(err.status || 500);
  const vm = {
      "error": { 
          "message": err.message, 
          "error": {}, 
          "stack": err.stack 
      }
  };
  res.render( 'error', vm );
});
process.on("uncaughtException", function (err) {
  if (config.NODE_ENV === "production") {
  } else {
      console.error((new Date()).toUTCString() + " uncaughtException: " + err.message);
      console.error(err.stack);
      process.exit(1);
  }
});

module.exports = app;
