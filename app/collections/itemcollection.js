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
      }

    });

    return ItemCollection;
  }
);
