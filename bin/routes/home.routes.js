const config = require( './../../etc/dev.config' );
const superagent = require('superagent');

const apiUrl = config.API_URL;

const homeRoutes = ( app ) => {

    app.get( '/', async ( req, res ) => {
      try {
        const r = await superagent.get( apiUrl + '/errors' );
        console.log( r.body );
        res.render( 'index' , r.body );
      } catch ( e ) {
        console.error( e );
      }
    });

};

module.exports = homeRoutes;
