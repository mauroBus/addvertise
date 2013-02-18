/**
 * Item Model
 *
 */

define([
    'backbone'
  ], function(Backbone) {

    var ItemModel = Backbone.Model.extend({

      defaults: {
        title: 'nowhere',
        description: 'nothing to do',
        prize: 0
      },

      initialize : function() {
        console.log('loading item: ' + this.get('title'));
      }

    });

    return ItemModel;
  }
);
