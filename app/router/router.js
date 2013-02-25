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
    'views/homeview',
    'views/fullitemview',
    'views/errorview'
  ],
  function(Backbone, ItemModel, ItemCollection, HomeView, FullItemView, ErrorView) {

    var AppRouter = Backbone.Router.extend({

      routes : {
        'item:itemNumber': 'loadItemPage',
        'customize:itemNumber': 'customizeItem',
        '*action': 'homePage'
      },

      items: null,
      home: null,

      homePage : function() {
        if (!this.items) {
          this.items = new ItemCollection();

          this.home = new HomeView({el: 'body', 'items': this.items});
          this.home.render();

          this.items.fetch({update: true, remove: true, add: true});
        }
        else {
          this.home.goContentBack();
        }
      },

      transitionToItemView: function(item) {
        var itemToLoad = this.items.get(item);
        var itemView;
        if (itemToLoad) {
          itemView = new FullItemView({model: itemToLoad});
        }
        else {
          itemView = new ErrorView();
        }
        this.home.contentTransition(itemView);
      },

      loadItemPage: function(item) {
        console.log('loading item page for item id:  ' + item);

        if (!this.items) { // first time, loading an item instead of the main view:
          this.items = new ItemCollection();
          var _this = this;

          this.items
            .fetch({update: true, remove: false, add: true})
            .done(function() {
              _this.home = new HomeView({el: 'body', 'items': _this.items});
              _this.home.render();
              _.bind(_this.transitionToItemView(item), _this);
            });
        }
        else {
          this.transitionToItemView(item);
        }
      },

      customizeItem: function(item) {
        console.log('customizing item: ' + item);
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
