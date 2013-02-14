/**
 *  RequireJS bootstrap.
 *  Setup RequireJS configuration, and initialize application
 *
 */
require.config({
  paths: {
    'jquery' : '../libs/jquery/jquery-1.7.1.min',
    //'jquerymobile' : '../libs/jquerymobile/jquery.mobile-1.1.0.min',
    'backbone' : '../libs/backbone/backbone',
    'underscore' : '../libs/underscore/underscore',
    'hbs' : '../libs/hbs/handlebars-wrapper',
    'text' : '../libs/require/text'
  }
});

require(
  [
    'app'
  ],
  function(app) {
    app.init();
  }
);
