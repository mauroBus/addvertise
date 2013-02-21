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
        'item:itemNumber': 'loadItemPage',
        '*action': 'homePage'
      },

      items: null,

      homePage : function() {
        this.items = new ItemCollection();

        var home = new HomeView({el: 'body', 'items': this.items});
        home.render();

        this.items.fetch({update: true, remove: false, add: true});
      },

      loadItemPage: function(item) {
        console.log('loading item page for item id:  ' + item);
        this.items.get(item).set({'shortDescription': 'blablabla'});
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
