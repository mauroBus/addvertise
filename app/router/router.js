/**
 * Application router
 */
define([
    'backbone',
    // models
    'models/placemodel',
    // collections
    'collections/placecollection',
    // views
    'views/homeview'
    //'views/placeview',
    //'views/placecollectionview'
  ],
  function(Backbone, PlaceModel, PlaceCollection, HomeView/*, PlaceView, PlaceCollectionView*/) {

    var AppRouter = Backbone.Router.extend({

      routes : {
        '*action' : 'homePage'
      },

      homePage : function() {
        places = new PlaceCollection();
        places.fetch({update: true, remove: false, add: true});

        var home = new HomeView({el: 'body', 'places': places});
        home.render();
      }

    });

    var init = function() {
      new AppRouter();
      Backbone.history.start();
    };

    return {
      init : init
    };
  }
);
