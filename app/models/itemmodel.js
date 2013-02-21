/**
 * Item Model
 *
 */

define([
    'backbone'
  ], function(Backbone) {

    var ItemModel = Backbone.Model.extend({

      defaults: {
        id: -1,
        title: null,
        shortDescription: null,
        prize: 0,
        image: null,
        customizeImg: null,
        stars: -1
      },

      initialize : function() {
        console.log('loading item: ' + this.get('title'));
      }

    });

    return ItemModel;
  }
);
