/**
 */
define([
    'backbone',
    'models/placemodel',
    'config/config'
  ],
  function(Backbone, PlaceModel, Config) {
    var PlaceCollection = Backbone.Collection.extend({

      model: PlaceModel,
      url: 'app/config/places.config.json',

      parse: function(res) {
        return res.places;
      }

    });

    return PlaceCollection;
  }
);
