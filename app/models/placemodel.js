/**
 * Place Model
 *
 */

define([
    'backbone'
  ], function(Backbone) {

    var PlaceModel = Backbone.Model.extend({

      defaults: {
        title: 'nowhere',
        description: 'nothing to do'
      },

      initialize : function() {
        console.log('loading place: ' + this.get('title'));
      }

    });

    return PlaceModel;
  }
);
