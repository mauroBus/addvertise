/**
 */
define([
    'backbone',
    'models/itemmodel',
    'config/config'
  ],
  function(Backbone, ItemModel, Config) {
    var ItemCollection = Backbone.Collection.extend({

      model: ItemModel,
      url: 'app/config/items.config.json',

      parse: function(res) {
        return res.items;
      },

      initialize: function() {
        this.on('remove', this.removeItem);
      },

      /*
       * Triggering a custom event to indicate that the model
       * has been removed.
       */
      removeItem: function(item) {
        item.trigger('dispose');
      }
    });

    return ItemCollection;
  }
);
