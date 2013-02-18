/**
 * Application router
 */
define([
    'backbone',
    // models
    'models/itemmodel',
    // collections
    'collections/itemcollection',
    // views
    'views/homeview'
  ],
  function(Backbone, ItemModel, ItemCollection, HomeView) {

    var AppRouter = Backbone.Router.extend({

      routes : {
        '*action' : 'homePage'
      },

      homePage : function() {
        itmes = new ItemCollection();
        items.fetch({update: true, remove: false, add: true});

        var home = new HomeView({el: 'body', 'items': items});
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
