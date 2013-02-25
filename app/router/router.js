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
    'views/fullitemview'
  ],
  function(Backbone, ItemModel, ItemCollection, HomeView, FullItemView) {

    var AppRouter = Backbone.Router.extend({

      routes : {
        'item:itemNumber': 'loadItemPage',
        'customize:itemNumber': 'customizeItem',
        '*action': 'homePage'
      },

      items: null,
      home: null,

      homePage : function() {
        this.items = new ItemCollection();
        window.itemss = this.items;

        this.home = new HomeView({el: 'body', 'items': this.items});
        this.home.render();

        this.items.fetch({update: true, remove: true, add: true});
      },

      loadItemPage: function(item) {
        console.log('loading item page for item id:  ' + item);

        if (!this.items) {
          this.items = new ItemCollection();
          var _this = this;

          this.items
            .fetch({update: true, remove: false, add: true})
            .done(function() {
              _this.home = new HomeView({el: 'body', 'items': _this.items});
              _this.home.render();
              // it does not work ?
              //_this.items.get(item).set({'shortDescription': 'blablabla'});
              var fullItemView = new FullItemView({model: _this.items.get(item)});
              _this.home.contentTransition(fullItemView);
            });
        }
        else {
          var fullItemView = new FullItemView({model: this.items.get(item)});
          this.home.contentTransition(fullItemView);
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
